class Api::CardsController < ApplicationController

  def index
    render json: Card.all
  end

  def create
    card = Card.new
    card.name = params[:name]
    card.img_url = params[:img_url]
    if card.save
      render json: card
    else
      render card.errors
    end
  end

  def edit
    card = Card.find(params[:id])
    render json: card
  end

  def update
    Card.update(params[:id], :name => params[:name], :img_url => params[:img_url])
    render json: Card.all
  end

  def destroy
    card = Card.find(params[:id])
    if card.destroy
      render json: card
    else
      render json: card.errors
    end
  end


end
