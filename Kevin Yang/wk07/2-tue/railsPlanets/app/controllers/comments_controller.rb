class LikesController < ApplicationController

  def create
    c = Comment.new
    c.planet_id = params[:planet_id]
    c.user_id = session[:user_id]

    c.save
    redirect_to "/planets"

  end
end
