class Magic8ballController < ApplicationController

  def answer

    if params[:question].empty?
      render :magic_8_ball
    else
      answer = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      ]
      @display_answer = answer.sample
      render :test
    end
  end



end
