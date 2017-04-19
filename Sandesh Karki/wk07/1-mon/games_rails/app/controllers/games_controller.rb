
class GamesController < ApplicationController
  

  def answer_page
    @answer = params[:test]
    render :text
  end
end
