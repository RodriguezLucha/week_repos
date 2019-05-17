class UsersController < ApplicationController
  def new
    #go the form by default
  end

  def create
    user = User.new(user_params)
    user.save!
    login!(user)
    redirect_to new_session_url
  end
 
  def destroy
    #TODO: Delete a user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
