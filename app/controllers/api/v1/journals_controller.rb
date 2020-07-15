class Api::V1::JournalsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: {
        status: 200,
        journals: current_user.journals
    }
  end

  def create
    if new_journal.save!
      render json: {
          status: 201,
          journal: new_journal
      }
    else
      render json: {
          status: 500,
          errors: new_journal.errors.full_messages
      }
    end
  end

  private

  def journal_params
    params.require(:journal).permit(:title, :description)
  end

  def new_journal
    Journal.new(
        title: journal_params[:title],
        description: journal_params[:description],
        user_id: current_user.id
    )
  end
end