require "pry"
class Monkey
  attr_accessor :name, :species
  #attr_reader
  #attr_writer
  
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten.push(food)
  end


  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods_eaten[0]} and #{@foods_eaten[1]} for brunch"
  end
end
