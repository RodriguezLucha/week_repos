class SessionsController < ApplicationController
  def new
  end

  def create
    email = user_params[:email]
    password = user_params[:password]
    user = User.find_by_credentials(email, password)
    if user
      login!(user)
      redirect_to new_session_url
    else
      render plain: "Unable to login"
    end
  end
  
  def destroy
    logout!
    redirect_to new_session_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
