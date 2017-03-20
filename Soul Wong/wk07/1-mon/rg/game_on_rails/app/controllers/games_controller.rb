class GamesController < ApplicationController
  def magic_question
    render :magic_question
  end

  def magic_answer
    @answer = ["Yes","No","Maybe.."].sample
    render :magic_question
  end

  def secret_number
    render :secret_number
  end

  def secret_number_guess
    if params[:choice].to_i == (1..10).to_a.sample
      render :secret_number_winner
    else
      render :secret_number_loser
    end
  end

  def rock_paper_scissors
    render :rock_paper_scissors
  end

  def rock_paper_scissors_play
    if (1..3).to_a.sample == 1
      @winner = "You are the winner!"
    else
      @winner = "You are not the winner!"
    end
    render :rock_paper_scissors_play
  end

end
