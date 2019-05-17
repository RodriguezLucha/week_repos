class ApplicationController < ActionController::Base

  helper_method :current_user

  def login!(user)
    #1. save off the user in an instance variable, 2.get the session token, 3. save into a cookie
    @current_user = user
    session[:session_token] = user.session_token
  end

  def current_user
    #if the cookie is nil, just return nil
    return nil if session[:session_token].nil?

    #conditionally set the instance variable, find the user in the database with the token
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout!
    #Change the user token (also saves in the db) then blank it out in the cookie
    current_user.reset_session_token! # This calls the method!
    session[:session_token] = nil
  end

end
