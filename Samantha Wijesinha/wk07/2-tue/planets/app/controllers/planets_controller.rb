class PlanetsController < ApplicationController

  def index
      @planets = Planet.all
  end

  def create
    new_planet = Planet.new
    new_planet.name = params[:name]
    new_planet.image_url = params[:image]

    if new_planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def destroy
    planet = Planet.find(params[:planet_id])
    if planet.destroy
      redirect_to '/planets'
    else
      redirect_to '/'
    end
  end

  def show
    @planet = Planet.find(params[:id])

  end
end
