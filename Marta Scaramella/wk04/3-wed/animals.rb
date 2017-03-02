require "pry"

class Animal
  attr_accessor :name, :age, :gender

  def initialize (name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  # def add_a_toy (toy)
  #   toys << toy
  # end

end

binding.pry
