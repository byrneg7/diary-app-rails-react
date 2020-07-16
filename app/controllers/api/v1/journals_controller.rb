class Api::V1::JournalsController < ApplicationController
  before_action :authenticate_user
  before_action :owns_journal, only: :show

  def index
    @journals = current_user.journals
    render json: @journals
  end

  def show
    render json: current_journal
  end

  def create
    if new_journal.save!
      render json: { status: 201, journal: new_journal }
    else
      render json: { status: 500, errors: new_journal.errors.full_messages }
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

  def current_journal
    Journal.find(params[:id])
  end

  def owns_journal
    unless current_journal.belongs_to_user(current_user)
      render json: { error: :unauthorized }, status: 401
    end
  end

end