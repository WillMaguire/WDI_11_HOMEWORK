class PagesController < ApplicationController
  def index
  end

  def magicball
    responses = [
      "Absolutely", "Answer Unclear Ask Later", "Cannot Foretell Now", "Can't Say Now", "Chances Aren't Good", "Consult Me Later", "Don't Bet On It", "Focus And Ask Again", "Indications Say Yes", "Looks Like Yes", "No", "No Doubt About It", "Positively", "Prospect Good", "So It Shall Be", "The Stars Say No", "Unlikely", "Very Likely", "Yes", "You Can Count On It"
    ]

      if params[:question] != ""
        @answer = responses.sample
      else
        @answer = "You have to ask a question"
      end

  end

  def secretnumber
    number = rand(0..10)
    guessed_number = params[:button].to_i

    if number == guessed_number
      @response = "YOU GUESSED CORRECTLY THE NUMBER WAS : #{guessed_number}"
    else
      @response = "PLEASE TRY AGAIN THE NUMBER WAS : #{number}"
    end
  end

  def rockpaper
    @array_game = ['rock', 'paper', 'scissors']
    outcomes = @array_game.sample
    users_choice = params[:throw]

    if users_choice == outcomes
      @response = "DRAW You: #{users_choice} Computer: #{outcomes}"
    elsif users_choice == 'rock' && outcomes == 'scissors'
      @response = "YOU WIN You: #{users_choice} Computer: #{outcomes}"
    elsif users_choice == 'scissors' && outcomes == 'paper'
      @response = "YOU WIN You: #{users_choice} Computer: #{outcomes}"
    elsif users_choice == 'paper' && outcomes == 'rock'
      @response = "YOU WIN You: #{users_choice} Computer: #{outcomes}"
    else
      @response = "YOU LOSE PLEASE TRY AGAIN You: #{users_choice} Computer: #{outcomes}"
    end


  end

end
