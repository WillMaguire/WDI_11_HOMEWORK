class SecretNumberController < ApplicationController

  def index
    render :index
  end

  def show
    number = [1,2,3,4,5,6,7,8,9,10].sample
    if params[:guess].to_i > number
      @answer = "Lower"
    elsif params[:guess].to_i < number
      @anwser = "Higher"
    else
      @answer = "#{number} Correct!!"
    end
    render :show
  end


end
