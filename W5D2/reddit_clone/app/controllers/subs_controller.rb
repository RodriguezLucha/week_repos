class SubsController < ApplicationController

  # before_action :require_moderator
  before_action :require_login

  def require_moderator
    @sub = Sub.find(params[:id])
    redirect_to new_session_url unless current_user.id == @sub.moderator_id
  end

  def new
    
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to subs_url
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find(params[:id])
  end

  def update
    @sub = current_user.subs.find(params[:id])
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :edit
    end
  end

  def index
    @subs = Sub.all
  end

  def edit
    @sub = Sub.new
  end

  def sub_params
    params.require(:sub).permit(:title, :description, :moderator_id)
  end

end
