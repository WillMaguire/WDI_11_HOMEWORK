class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
    # @user = User.find_by(id: params[:id])
  end

  def new
  end

  def create
    s = Planet.new
    s.planet = params[:name]
    s.image_url = params[:image_url]
    if s.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def destroy
    s = Planet.find{params[:planet_id]}
    if s.destroy
      redirect_to '/planets'
    else
      render :index
    end
  end

  def edit
    @planet = Planet.find{params[:id]}
  end

  def editing
    s = Planet.find{params[:id]}
    s.planet = params[:name]
    s.image_url = params[:image_url]
    s.save
    redirect_to '/planets'
  end
end
