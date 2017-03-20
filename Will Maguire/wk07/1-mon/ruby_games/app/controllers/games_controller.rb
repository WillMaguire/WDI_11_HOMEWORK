class GamesController < ApplicationController

def index
end

def magic8ball
  @answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very Doubtful"]
  @final_answer = @answer[rand(1..20) - 1]
end

def random_number_answer
  if params[:name] = rand(1..10).to_s
    redirect '/winner'
  else redirect '/looser'

    end
  end

def rock_paper_scissors_solution
  end

end
