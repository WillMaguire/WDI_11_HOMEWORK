class GamesController < ApplicationController
  def eightballanswer
    str = params[:question]
    string_array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
      "Most Likely", "Outlook good", "Yes", "Signs point to yes","Reply hazy try again
      ", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
      "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    @answer = string_array.sample
    render :eightballanswer
  end

  def secretnumberanswer
    input = params[:num]
    @secretnumber = (1..10).to_a.sample
    if input == @secretnumber
      @string = 'You have guessed the correct number'
    else
      @string = 'You have guessed wrong! Try again'
    end
    render :secretnumberanswer
  end

  def rock_paper_scissors_play
    input = params[:throw]
    array = ["rock", "paper", "scissors"]
    c_input = array.sample

    if input == c_input
      @string = 'tie game'
    end

    if input == 'paper' && c_input == 'scissors'
      @string = 'you lose'
    end

    if input == 'paper' && c_input == 'rock'
      @string = 'you win'
    end

    if input == 'scissors' && c_input == 'paper'
      @string = 'you win'
    end

    if input == 'scissors' && c_input == 'rock'
      @string = 'you lose'
    end

    if input == 'rock' && c_input == 'paper'
      @string = 'you lose'
    end

    if input == 'rock' && c_input == 'scissors'
      @string = 'you win'
    end

    render :rock_paper_scissors_play
  end
end
