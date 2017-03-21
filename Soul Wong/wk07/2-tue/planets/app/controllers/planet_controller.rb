class PlanetController < ApplicationController
  def index
    @Planets = Planet.all
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.description = params[:description]
    planet.image_url = params[:image_url]
    if planet.save
      redirect_to '/planet/index'
    else
      #Unsuccessful creation
      redirect_to '/planet/new'
    end
  end

  def delete
    planet = Planet.find_by(id:params[:id])
    if planet.destroy
      redirect_to '/planet/index'
    else
      redirect_to "/planet/edit/#{params[:id]}"
    end 
  end

  def edit
    @Planet = Planet.find_by(id:params[:id])
  end

  def modify
    planet = Planet.find_by(id:params[:id])
    planet.name = params[:name]
    planet.description = params[:description]
    planet.image_url = params[:image_url]
    if planet.save
      redirect_to '/planet/index'
    else
      #Unsuccessful creation
      redirect_to "/planet/edit/#{params[:id]}"
    end
  end

  def view
    @Planet = Planet.find_by(id:params[:id])
  end
end
