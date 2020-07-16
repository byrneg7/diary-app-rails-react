class Api::V1::PagesController < ApplicationController
  before_action :authenticate_user
  before_action :owns_journal

  def index
    @pages = current_journal.pages
    render json: @pages
  end

  def show
    render json: current_page
  end

  def create
    if new_page.save!
      render json: {status: 201, page: new_page}
    else
      render json: {status: 500, errors: new_page.errors.full_messages}
    end
  end

  private

  def page_params
    params.require(:page).permit(:content)
  end

  def new_page
    Page.new(
      content: page_params[:content],
      journal_id: params[:journal_id]
    )
  end

  def current_journal
    Journal.find(params[:journal_id])
  end

  def current_page
    Page.find(params[:id])
  end

  def owns_journal
    unless current_journal.belongs_to_user(current_user)
      render json: {error: :unauthorized}, status: 401
    end
  end

end