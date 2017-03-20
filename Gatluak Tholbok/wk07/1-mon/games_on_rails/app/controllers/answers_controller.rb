class AnswersControllers < ApplicationController

  def answer
    if params[:status] == 'activated'
      @answer = Magic8ball.activated
    else
      @answer = Magic8ball.inactivated
    end
  end

    def answer
      @answer = Answer.new(params[:answer])
      if @answer.save
        redirect_tp @magic8ball
      else
        render :magic8ball
      end
    end
end
