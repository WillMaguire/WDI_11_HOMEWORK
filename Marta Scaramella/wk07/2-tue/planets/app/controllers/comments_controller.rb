class CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def new
  end

  def create
    comment = Comment.new
    comment.body = params[:body]
    comment.user_id = session[:user_id]
    comment.planet_id = params[:planet_id]
    comment.save
    redirect_to '/planets'
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to '/planets'
  end

end
