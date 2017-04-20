class EightballController < ApplicationController
  def index
  end

  def answer
    @question = params[:question]
  end
end
