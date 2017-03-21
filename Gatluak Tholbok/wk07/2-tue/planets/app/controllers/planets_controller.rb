class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
    @planets = Planet.new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]

    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def destroy
    planet = Planet.find(params[:planet_id])

    if planet.destroy
      redirect_to '/planets'
    else
      render :index
    end
  end
end
