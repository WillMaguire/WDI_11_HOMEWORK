class GamesController < ApplicationController

  def eightball
    answers = [ "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good"]
    if params[:answer_id] == nil
      @answer = ''
    else
      @answer = answers[params[:answer_id].to_i]
    end
    render :eightball
  end

  def eight_ball_ask
    @answer_id = rand(19)
    redirect_to "/games/eightball?answer_id=#{ @answer_id }"
  end

  def secret_number
  end

  def check_secret_number
    @computer_number = 1 + rand(10)
    @user_guess = params[:user_guess].to_i
    render :secret_number_answer
  end

  def rock_paper_scissors
  end

  def rock_paper_scissors_play
    @comp_throw = ['rock', 'paper', 'scissors'].sample
    @user_throw = params[:throw]
    if @comp_throw == @user_throw
      @result = 'tie'
    elsif @comp_throw == 'rock'
      if @user_throw == 'paper'
        @result = 'user'
      else
        @result = 'computer'
      end
    elsif @comp_throw == 'paper'
      if @user_throw == 'scissors'
        @result = 'user'
      else
        @result = 'computer'
      end
    elsif @user_throw == 'scissors'
      if @user_throw == 'rock'
        @result = 'user'
      else
        @result = 'computer'
      end
    end
  end

end
