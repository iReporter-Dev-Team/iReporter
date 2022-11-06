class RedflagsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    def index
        render json: Redflag.all, status: :ok
    end

    def create
        redflag = Redflag.create!(redflag_params)
        if redflag.valid?
            render json: RedflagImageSerializer.new(redflag).serializable_hash[:data][:attributes], status: :created
        else
            render json: { errors: redflag.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def show 
        redflag = Redflag.find_by!(id: params[:id])
        render json: RedflagImageSerializer.new(redflag).serializable_hash[:data][:attributes], status: :ok
    end

    def update
        redflag = Redflag.find(params[:id])
        user = User.find_by(id: session[:user_id])
        reporter = redflag.user
        if user != reporter
            RedflagSms.new.send_sms(reporter, redflag)
            StatusMailer.status_update(reporter, redflag).deliver_now
        end
        if redflag.update!(redflag_params) 
            render json: redflag, status: :ok
        else
            render json: { errors: redflag.errors.full_messages }, 
            status: :unprocessable_entity
        end
    end

    def destroy
        redflag = Redflag.find(params[:id])
        redflag.destroy
        head :no_content
    end

    private
    
    def redflag_params
        params.permit(:id, :headline, :address, :latitude, :longitude, :location, :image, :video, :status, :description, :user_id)
    end

end
