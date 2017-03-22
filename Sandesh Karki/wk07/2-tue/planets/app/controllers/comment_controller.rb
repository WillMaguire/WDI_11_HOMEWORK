class CommentController < ApplicationController


  def create
    planet = Planet.find(params[:planet_id])
    planet.body = params[:body]
    planet.planet_id = params[:planet_id]
    if planet.save
      redirect_to "comment/show/#{params[:planet_id]}"
    else
      redirect_to '/' #testing purpose
  end

  def list
  end

  def show
  end

  def edit
  end

  def update
  end

  def delete
  end

  def destroy
  end
end
