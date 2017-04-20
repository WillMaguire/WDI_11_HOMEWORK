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
    planet = Planet.new
    planet.name = params[:name]
    planet.img_url = params[:img_url]
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def destroy
    planet = Planet.find(params[:dish_id])
    if planet.destroy
      redirect_to '/planets'
    else
      render :index
    end
  end

end
