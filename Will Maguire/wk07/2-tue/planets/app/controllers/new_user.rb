class UsersController < ApplicationController

  def create
    user = User.new
    user.name = params[:User_name]
    user.password = params[:user_password]
    if user.save
      redirect_to '/planets'
    else
      render :new
    end
  end
