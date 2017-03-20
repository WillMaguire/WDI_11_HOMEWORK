class GamesController < ApplicationController
  def magic_8_ball
  end

  def magic_8_ball_answer
    responses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ]

    @response = responses.sample
  end

  def secret_number
  end

  def secret_number_result
    @secret = rand(1..10)

    if params[:number].to_i == @secret
      render :secret_number_win
    else
      render :secret_number_lose
    end
  end

  def rock_paper_scissors
  end

  def rock_paper_scissors_play
    @user_choice = params[:throw]
    @opponent_choice = %w(Rock Paper Scissors).sample

    @user_won = (@user_choice == "Rock" && @opponent_choice == "Scissors") ||
                (@user_choice == "Paper" && @opponent_choice == "Rock") ||
                (@user_choice == "Scissors" && @opponent_choice == "Paper")
  end
end
