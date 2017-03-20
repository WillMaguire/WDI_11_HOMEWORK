class GamesController < ApplicationController

def index
end

def magic8ball
  @answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very Doubtful"]
  if params[:question] != nil
    @final_answer = @answer[rand(1..20) - 1]
      else @final_answer = " I SAID ASK A QUESTION!  WITH A QUESTION MARK!"

  end
end

def secret_number_answer
  if params[:name] == rand(1..10).to_s
    redirect_to '/winner'
  else redirect_to '/looser'

    end
  end

def rock_paper_scissors_play
  "rock" > "scissors"
  "paper" > "rock"
  "scissors" > "paper"
  options = ["rock", "paper", "scissors"]
  game_choice = options[(rand(1..3)-1)]
  throw redirect_to '/winner' if params[:name] > game_choice
end
# Nor entirly sure of the logic... very late... this feels like a loop...
def winner
end

def looser
end

end
