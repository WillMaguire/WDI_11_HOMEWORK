class GamesController < ApplicationController

  def magic8Balls
    @output = params[:output]
  end

  def secretNumber
    @output = params[:output]
  end

  def rockPaperScissors
    @output = params[:output]
  end

  def fortuneTelling
    input = rand(1..5)

    if input.to_i == 1
      @output= 'yes'
    elsif input.to_i == 2
      @output= 'no'
    elsif input.to_i == 3
      @output= 'seek advice from close friends'
    elsif input.to_i == 4
      @output= 'seek freedom'
    elsif input.to_i == 5
      @output='seek discipline'
    else
      @output = 'lol'
    end

    redirect_to '/games/magic8Balls?output=' + @output
  end

  def guessNumber
    @num = rand(1..10)
    if params[:choice].to_i == @num.to_i
      @output = "you guess it right!"
    else
      @output = "Try again :( the number was " + @num.to_s
    end
      redirect_to '/games/secretNumber?output=' + @output
  end

  def rpsOutcome
    input = rand(1..3) #1-sci, 2-paper, 3- rock
    if input.to_i == 1 && params[:choice] == "rock"
      @output = "PC placed scissor, you won!"
    elsif input.to_i == 2 && params[:choice] == "rock"
      @output = "PC placed paper, you lost :("
    elsif input.to_i == 3 && params[:choice] == "rock"
      @output = "PC placed rock,DRAW"
    elsif input.to_i == 1 && params[:choice] == "paper"
      @output = "PC placed scissor, you lost :("
    elsif input.to_i == 2 && params[:choice] == "paper"
      @output = "PC placed paper, DRAW"
    elsif input.to_i == 3 && params[:choice] == "paper"
      @output = "PC placed rock, you won!"
    elsif input.to_i == 1 && params[:choice] == "scissor"
      @output = "PC placed scissor, DRAW"
    elsif input.to_i == 2 && params[:choice] == "scissor"
      @output = "PC placed paper, you won!"
    elsif input.to_i == 3 && params[:choice] == "scissor"
      @output = "PC placed rock, you lost :("
    end

    redirect_to '/games/rockPaperScissors?output=' + @output
  end


end
