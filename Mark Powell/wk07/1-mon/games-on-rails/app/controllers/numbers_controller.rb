class NumbersController < ApplicationController
  def index
  end

  def check
    @number = params[:number]
  end
end
