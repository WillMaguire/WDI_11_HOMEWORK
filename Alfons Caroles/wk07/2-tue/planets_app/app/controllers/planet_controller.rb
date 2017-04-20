class PlanetController < ApplicationController

  def index
    @planets = Planet.all
    @user = User.find_by(params[:user_id])
  end

  def new
  end

  def create
    new_planet = Planet.new
    new_planet.name = params[:name]
    new_planet.image_url = params[:img_url]
    if new_planet.save
      redirect_to '/planet'
    else
      render :new
    end
  end

  def destroy
    dish = Dish.find(params[:planet_id])
    if planet.destroy
      redirect_to '/planet'
    else
      render :index
    end
  end

end
