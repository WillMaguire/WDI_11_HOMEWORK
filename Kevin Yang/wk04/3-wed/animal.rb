# require 'pry'
class Animal
  attr_accessor :name, :age, :gender, :species, :toys, :relationship

  def initialize(name, age, gender, species, toys, relationship)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
    @relationship = relationship
  end

  # def adopted
  #   return adopted
  # end
  #
  # def checkAdopted
  #   @relationship = 'yes'
  #   puts "#{name} is already owned"
  # end
  #
  # def adoptedMarker
  #   @relationship ='yes'
  # end
end


# binding.pry
