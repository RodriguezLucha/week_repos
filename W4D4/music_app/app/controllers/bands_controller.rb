class BandsController < ApplicationController
  def edit
    @band = Band.find_by(id: params[:id])
  end

  def index
    @bands = Band.all
  end

  def new
    #Default form will be rendered.
  end

  def create
    band = Band.new(band_params)
    if band.save
      redirect_to bands_url
    else
      render json: band.errors.full_messages
      # render json: band.errors.full_messages
    end
  end

  def shown
  end

  def update
    band = Band.find(params[:id])
    band.update_attributes(band_params)
    if band.save
      redirect_to bands_url
    else
      render plain: band.errors.full_messages
    end
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end
end
