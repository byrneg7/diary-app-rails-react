class Api::V1::JournalsController < ApplicationController
  before_action :authenticate_user

  def create
    puts 'current user: ', @user
    puts 'create journal with these params: ', params
  end

  def user_params
    params.require(:journal).permit(:title, :description)
  end
end