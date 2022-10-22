class InterventionsController < ApplicationController
    before_action :authorize
    def 
        index
     
        render json: Intervention.all, status: :ok 
    end
def create
    intervention = Intervention.create(intervention_params)
    if intervention.valid?
        render json: intervention, status: :created
    else
        render json: { errors: intervention.errors.full_messages }, status: :unprocessable_entity
    end

end

def update
    intervention = Intervention.find(params[:id])
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
    params.permit(:location, :image, :video, :status, :description, :user_id)
end
end