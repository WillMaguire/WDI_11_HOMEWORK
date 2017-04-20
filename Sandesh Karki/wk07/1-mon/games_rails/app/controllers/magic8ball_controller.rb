
class Magic8ballController < ApplicationController

  def m8ball_page
    render :m8ball
  end

  def playball
    if params[:question].empty?
      # @message = "Please ask question"
      redirect_to "/magic8ball"
    else
      response = ['maybe', 'no', 'ok' , 'yes', 'sometimes', 'sure', 'no idea', 'thats ok']
      @answer = response.sample

      render :text
    end
  end




end
