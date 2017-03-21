class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def new
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def create
    planet.name = params[:name]
    planet.image_url = params[:image_url]
  end

  def destroy
  end
end
