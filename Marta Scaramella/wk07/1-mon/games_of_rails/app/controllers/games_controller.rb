class GamesController < ApplicationController

  def index
  end

  def magic_8_ball
    @question = params[:question]

    num = rand(1..5)
      if num == 1
        @answer = "Yes!"
      elsif num == 2
        @answer = "You may rely on it"
      elsif num == 3
        @answer = "Better not tell you now"
      elsif num == 4
        @answer = "Concentrate and ask again"
      elsif num == 5
        @answer = "Outlook not so good"
      elsif num == 5
        @answer = "Very doubtful"
      end
  end

  def secret_number
    @number_guessed = params[:number_guessed]
    @num = rand(1..10)

    if @num.to_i == @number_guessed.to_i
      @result = "You win!"
    else
      @result = "I'm sorry, you lose!"
    end
  end


  def rock_paper_scissors
    throw = params[:throw]
    @throw = throw.to_i
    @num = rand(1..3)

    # 1 = rock
    # 2 = paper
    # 3 = scissor
    
    if @throw === 1
      @chose = "rock"
    elsif @throw === 2
      @chose = "paper"
    else
      @chose = "scissor"
    end

    if @num === 1
      @pc_chose = "rock"
    elsif @num === 2
      @pc_chose = "paper"
    else
      @pc_chose = "scissor"
    end

    if @throw === 1

      if @num === 1
        @result = "it's even!"
      elsif  @num === 2
        @result = "I'm sorry, you lost! Paper beats rock!"
      else
        @result = "You win! Rock beats scissor!"
      end

    elsif @throw == 2
      if @num == 1
        @result = "You win! Paper beats rock!"
      elsif  @num == 2
        @result = "It's even!"
      else
        @result = "You lost! Scissor beats paper!"
      end

    else
      if @throw == 1
        @result = "You lost! Rock bets scissor"
      elsif @throw == 2
        @result = "You win! Scissor beats paper!"
      else
        @result = "It's even!"
      end

    end

  end

end
