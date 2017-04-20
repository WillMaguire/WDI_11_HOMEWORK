require 'pry'
class Monkey

  def initialize(new_name,new_species)

    @name = new_name
    @species = new_species
    @food_eaten = []
  end





  def eat(food)
    @food_eaten.push(food)
  end

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@food_eaten[0]} and #{@food_eaten[1]} for brunch"
  end

end

binding.pry
