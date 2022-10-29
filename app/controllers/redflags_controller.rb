class RedflagsController < ApplicationController
    before_action :authorize
    def index
        render json: Redflag.all, status: :ok
    end

    def create
        redflag = Redflag.create(redflag_params)
        if redflag.valid?
            render json: redflag, status: :created
        else
            render json: { errors: redflag.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    def show 
        redflag = Redflag.find_by!(id: params[:id])
        render json: redflag, status: :ok
    end

    def update
        redflag = Redflag.find(params[:id])
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
        params.permit(:id, :location, :image, :video, :status, :description, :user_id)
    end

end
