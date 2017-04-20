class HomeController < ApplicationController
  def main
    if session[:user_id]
      @user = User.find(session[:user_id])
    else
      @planets = Planet.all
      render :main
    end
  end

  def start_session
    # @planets = Planet.all
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      render :main
    end
  end

  def end_session
    # @planets = Planet.all
    session[:user_id] = nil
    redirect_to '/'
  end

  def new_planet
    planet = Planet.new
    planet.name = params[:name]
    planet.size = params[:size]
    planet.image_url = params[:image]
    planet.user_id = session[:user_id]
    planet.save
    redirect_to '/'
  end

  def comment
    comment = Comment.new
    comment.body = params[:body]
    comment.user_id = session[:user_id]
    comment.planet_id = params[:id]
    comment.save
    redirect_to '/'
  end
end
