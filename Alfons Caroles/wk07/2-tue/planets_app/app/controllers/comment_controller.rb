class CommentController < ApplicationController
  def new
  end

  def create
    new_comment = Comment.new
    new_comment.user_id = session[:user_id]
    new_comment.planet_id = params[:planet_id]
    new_comment.body = params[:content]
    if new_comment.save
      redirect_to '/planet'
    else
      render :new
    end
  end

  def destroy
  end
end
