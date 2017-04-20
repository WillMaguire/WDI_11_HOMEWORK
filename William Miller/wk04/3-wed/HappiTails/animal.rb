require 'pry'

class Animal

  attr_accessor :name, :age, :gender, :species, :toys


  def initialize(name, age, gender, species)
		@name = name
		@age = age
		@gender = gender
		@species = species
		@toys = []


    def toys(toys)
      @toys = toys

    toys_list.push(toys)
    end
  end

end

binding.pry
