class CommentsController < ApplicationController

def create
  comment = Comment.new
  comment.planet_id = params[:planet_id]
  like.user_id = session[:user_id]
  like.save
  redirect_to "/planets/#{comment.planet_id}"
end
end
s
