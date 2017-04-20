class PlanetController < ApplicationController

  def index
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.position = params[:position]
    planet.life = params[:life]
    planet.radius = params[:radius]
    planet.distance_from_sun_in_million_km = params[:distance]
    planet.image_url = params[:image]

    if planet.save
      redirect_to '/planet/list'
    else
      render :new
    end
  end

  def list
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def destroy
    planet = Planet.find(params[:planet_id])
    if planet.destroy
      redirect_to '/planet/list'
    else
     redirect_to "/planet/show/#{params[:id]}"
   end
  end

end
