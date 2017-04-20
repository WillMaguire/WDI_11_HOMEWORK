class CommentsController < ApplicationController
  def create
    comment = Comment.create(body: params[:body], user_id: current_user.id, planet_id: params[:planet_id])
    redirect_to "/planets/#{comment.planet.id}"
  end
end
