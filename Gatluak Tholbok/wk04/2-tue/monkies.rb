

class Monkey
  attr_accessor :name, :species
  # attr_reader #gives the read method
  # attr_writer #gives the write method

  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten << food
  end

  def introduce
    "Hi my name #{@name} I had #{@foods_eaten.join(' and ')} for lunch"
  end

  def to_s
    introduce
  end
end
