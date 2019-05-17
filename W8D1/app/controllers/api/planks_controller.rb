class Api::PlanksController < ApplicationController

  def create
    @bench = Plank.create!(plank_params)
    render json: @bench
  end
  def index
    @planks = Plank.all
    render json: @planks
  end

  def plank_params
    params.require(:plank).permit(:description, :lat, :lng)
  end

end