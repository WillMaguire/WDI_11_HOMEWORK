

require 'pry'

class Animal

    attr_accessor :name, :age, :gender, :species, :toys

    def initialize(name, age, gender, species)
      @name = name
      @age = age
      @gender = gender
      @species = species
      @toys = []
    end

    def animal_toys(toy)
      @toys << toy
    end

    def shelter()
      puts "Animal Name: #{@name}"
      puts "Age: #{@age}"
      puts "Gender: #{@gender}"
      puts "Species: #{@species}"
      puts "Toys: #{@toys}"
    end

end
