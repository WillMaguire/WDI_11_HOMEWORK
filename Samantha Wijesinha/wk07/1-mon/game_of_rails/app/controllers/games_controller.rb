class GamesController < ApplicationController
  def index
  end

  def eightball

  end

  def answer
    @question= params[:question]
    answers = [

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

  @answer = answers[Random.rand(answers.size)]

  end

  def rock_paper_scissors
    computer = ["rock","paper","scissors"]
    @user_pick = params[:player1_weapon]
    @computer_pick = computer[Random.rand(computer.size)]

    if @user_pick == "rock" && @computer_pick == "scissors"
    @result = "Player chose rock. \nComputer chose scissors."
    @winner =  "Rock beats scissors, player wins the round."


    elsif @user_pick == "scissors" && @computer_pick == "paper"
      @result =  "Player chose scissors. \nComputer chose paper."
      @winner =   "Scissors beat paper, player wins the round."


    elsif @user_pick == "paper" && @computer_pick == "rock"
      @result =  "Player chose paper. \nComputer chose rock"
      @winner =  "Paper beats rock, player wins the round."


    elsif @computer_pick == "rock" && @user_pick == "scissors"
      @result =  "Player chose scissors. \nComputer chose rock."
      @winner =  "Rock beats scissos, Computer wins the round"


    elsif @computer_pick == "scissors" && @user_pick == "paper"
      @result =  "Player chose paper. \nComputer chose scissors."
      @winner =  "Scissors beats paper, Computer wins the round"


    elsif @computer_pick == "paper" && @user_pick == "rock"
      @result =  "Player chose rock. \nComputer chose paper."
      @winner =  "Paper beats rock, Computer wins the round"


    elsif @user_pick == @computer_pick
      @result =  "Tie, go again!"

    else
      @result =  "Invalid Entry"
    end
end


  def secret_number
    @guess_number = params[:guess_no].to_i
    @computer_gen = rand(1..10)

    if @guess_number == @computer_gen
        @game = "you win!"
      else
        @game = "you lose! try again"
    end

  end
end
