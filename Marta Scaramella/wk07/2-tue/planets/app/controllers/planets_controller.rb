class PlanetsController < ApplicationController

  def new
  end

  def index
    @planets = Planet.all
    @comments = Comment.all
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

  def destroy
    planet = Planet.find(params[:id])
    if planet.destroy
      redirect_to '/planets'
    else
      render :index
    end
  end

end
