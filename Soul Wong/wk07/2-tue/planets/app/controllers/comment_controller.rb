class CommentController < ApplicationController
  def create
    comment = Comment.new
    comment.user_id = session[:user_id]
    comment.planet_id = params[:id]
    comment.body = params[:comment_body]
  
    if comment.save
      redirect_to "/planet/#{params[:id]}"
    else
      #failed to create comment
      redirect_to '/planet/index'
    end
  end
end
