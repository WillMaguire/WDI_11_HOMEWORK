require "pry"

class Animal
  attr_accessor :name, :age, :gender, :toys, :shelter, :array

  # @@array = []
  #
  # def self.all
  #   @@array.inspect
  # end

  def initialize (name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
    @@array << self
  end

  def info
    "#{@name} is a #{@species} of #{@age} years (#{@gender}). He/she fovourites toys are #{@toys.join (',')}"
  end

  def add_a_toy (toy)
    toys << toy
  end

  # return @@array

  # def add_animal_to_shelter
  #   @shelter = []
  #   @shelter.push(name.to_s)
  # end
end

# object = Animal.new(name, age, gender, species)
#
# $animal_list =[]
# $animal_list.push(object)

binding.pry
