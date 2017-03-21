class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.dish_id = params[:dish_id]
    comment.user_id = session[:user_id]

    if comment.save
      redirect_to "/planets/#{comment.dish_id}"
    else
      render :show
    end
  end
end
