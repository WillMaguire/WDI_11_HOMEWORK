class PlanetController < ApplicationController
  def index
    @Planets = Planet.all
  end

  def new
  end

  def delete
  end

  def edit
  end

  def view
    @Planet = Planet.find_by(id:params[:id])
  end
end
