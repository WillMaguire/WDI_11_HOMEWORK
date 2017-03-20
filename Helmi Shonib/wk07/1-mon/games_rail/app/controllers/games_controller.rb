class GamesController < ApplicationController
  def magic_8_ball
    render :magic_8_ball
  end

  def rock_paper_scissors
    render :rock_paper_scissors
  end

  def secret_number
    render :secret_number
  end
end
