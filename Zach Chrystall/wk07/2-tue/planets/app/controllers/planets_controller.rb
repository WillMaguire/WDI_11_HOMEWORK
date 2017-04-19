class PlanetsController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.radius = params[:radius].to_i
    planet.type = params[:type]
    planet.population = params[:population].to_i
    planet.color = params[:color]
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def destroy

  end

end
