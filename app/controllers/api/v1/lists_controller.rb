module Api::V1
  class ListsController < ApplicationController
    before_action :set_list, only: [:show, :edit, :update, :destroy]

    # GET /lists
    # GET /lists.json
    def index
      @lists = List.all
      render :json => @lists
    end

    # GET /lists/1
    # GET /lists/1.json
    def show
    end

    # GET /lists/new
    def new
      @list = List.new
    end

    # GET /lists/1/edit
    def edit
    end

    # POST /lists
    # POST /lists.json
    def create
      @list = List.new(list_params)

      if @list.save
        render json: @list, status: :created
      else
        render json: @list.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /lists/1
    # PATCH/PUT /lists/1.json
    def update
      if @list.update(list_params)
        render json: @list
      else
        render json: @list.errors, status: :unprocessable_entity
      end
    end

    # DELETE /lists/1
    # DELETE /lists/1.json
    def destroy
      @list.destroy
      if @list.destroy
        head :no_content, status: :ok
      else
        render json: @list.errors, status: :unprocessable_entity
      end
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_params
      params.require(:list).permit(:title, :excerpt, :description, :upvotes)
    end
  end
end