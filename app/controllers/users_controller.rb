class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: User.all, status: :ok
    end

    def show 
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # update user details
    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: user, status: :ok
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end

    end

    # delete a user
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content

    end

    private

    def user_params
        params.permit(:name, :email, :phone_number,:password, :password_confirmation)
    end
end
