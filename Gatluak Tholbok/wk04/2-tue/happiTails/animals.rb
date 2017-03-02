class Animals
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize (name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def get_toys(new_toy)
    @toys << new_toy
  end
end
