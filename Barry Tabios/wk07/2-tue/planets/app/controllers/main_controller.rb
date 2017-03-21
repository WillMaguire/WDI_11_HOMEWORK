class MainController < ApplicationController
  def index
    @planets = Planet.all
    #render :index
  end

  def new
    #render :new
  end

  def edit
    @planet_id = params[:planet_id]
    #render :edit
  end

  def update
    planet = Planet.find(params[:planet_id])
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    planet.save
    redirect_to '/'
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    if planet.save
      redirect_to '/'
    else
      redirect_to '/'
    end
  end

  def destroy
    planet = Planet.find(params[:planet_id])
    if planet.destroy
      redirect_to '/'
    else
      redirect_to '/'
    end
  end

end
