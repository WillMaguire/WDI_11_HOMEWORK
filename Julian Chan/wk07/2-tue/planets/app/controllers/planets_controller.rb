class PlanetsController < ApplicationController
  @@nullable_attributes = Planet.attribute_names.reject { |a| %w(id name created_at updated_at).include?(a) }

  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def new
  end

  def create
    planet = Planet.new(name: params[:name])

    @@nullable_attributes.each do |attribute|
      planet[attribute] = params[attribute] unless params[attribute].empty?
    end

    if planet.save
      redirect_to '/'
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    planet = Planet.find(params[:planet_id])
    planet.name = params[:name]

    @@nullable_attributes.each do |attribute|
      planet[attribute] = params[attribute].empty? ? nil : params[attribute]
    end

    if planet.save
      redirect_to "/planets/#{planet.id}"
    else
      redirect_to "/planets/#{planet.id}/edit"
    end
  end

  def destroy
    planet = Planet.find(params[:planet_id])

    if planet.destroy
      redirect_to '/'
    else
      redirect_to "/planets/#{planet.id}"
    end
  end
end
