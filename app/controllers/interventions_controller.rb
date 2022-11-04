class InterventionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    def index
        render json: Intervention.all, status: :ok 
    end

    def show 
        intervention = Intervention.find_by!(id: params[:id])
        render json: InterventionImageSerializer.new(intervention).serializable_hash[:data][:attributes], status: :ok
    end

    def create
        intervention = Intervention.create!(intervention_params)
        if intervention.valid?
            render json: InterventionImageSerializer.new(intervention).serializable_hash[:data][:attributes], status: :created
        else
            render json: { errors: intervention.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        intervention = Intervention.find(params[:id])
        user = User.find_by(id: session[:user_id])
        reporter = intervention.user
        if user != reporter
            InterventionSMS.new.send_text(reporter, intervention)
            RecordMailer.record_update(reporter, intervention).deliver_now
        end
        if intervention.update(intervention_params)
            render json: intervention, status: :ok
        else
            render json: { errors: intervention.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        intervention = Intervention.find(params[:id])
        intervention.destroy
        head :no_content
    end

    private

    def intervention_params
        params.permit(:id, :headline, :address, :latitude, :longitude, :location, :image, :video, :status, :description, :user_id)
    end
end