class Api::CardsController < ApplicationController
  def index
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

  def create
    new_card = Card.new
    new_card.name = params[:name]
    new_card.image_url = params[:image_url]
    if new_card.save
      render json: new_card
    else
      render json: new_card.errors
    end
  end

  def update
    card_update = Card.find(params[:id])
    card_update.name = params[:name]
    card_update.image_url = params[:image_url]
    if card_update.save
      render json: card_update
    else
      render json: card_update.errors
    end
  end
end
