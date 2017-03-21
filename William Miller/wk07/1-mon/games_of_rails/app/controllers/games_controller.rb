class GamesController < ApplicationController

  def magic_eight

    @question = params[:question]

    num = rand(1..6)

    if num == 1
      @answer = "Don\'t count on it"

    elsif num == 2
      @answer = "It looks doubtful"

    elsif num == 3
      @answer = "Do you even need to ask?"

    elsif num == 4
      @answer = "Things are looking up"

    elsif num == 5
      @answer = "All signs point to yes"

    elsif num == 6
      @answer = "Don't ask me Im just a stupid eight ball"

    end

  end


end
