class GamesController < ApplicationController

  def index
    render :index
  end

  def magic8balls

  end

  def secret_number_answer
    input = params[:num]
    @secretnumber = (1...10).to_a.sample
end
