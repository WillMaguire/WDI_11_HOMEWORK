class GamesController < ApplicationController

  def index
  end

  def magic8ball
    answers_list =[
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
    @question = params[:question]
    @answer = answers_list[Random.rand(answers_list.size)]
  end

  def secretnumber
    @numbers = [1,2,3,4,5,6,7,8,9,10]
    @secret = Random.rand(1..10)
  end

  def win
  end

  def lose
  end

  def rock_paper_scissors_play
    @user_choice = params[:throw]
    gestures = ['rock', 'paper', 'scissor']
    @random_gesture = gestures[Random.rand(gestures.size)]
  end

end
