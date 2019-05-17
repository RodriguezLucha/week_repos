class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render :show 
        else 
            flash.now[:errors] = ["Invalid username or password"]
            render :show 
        end
        
    end

    def destroy
       @user = User.find(params[:id])
       @user.destroy 
       render :show 
    end
end
