class Api::V1::UsersController < ApplicationController
  include ::ActionController::Cookies

  def show
    @user = current_user
    if @user
      render json: @user
    else
      render json: {
          status: 500,
          errors: ['user not found']
      }
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: {
          status: :created,
          user: @user
      }
    else
      render json: {
          status: 500,
          errors: @user.errors.full_messages
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end