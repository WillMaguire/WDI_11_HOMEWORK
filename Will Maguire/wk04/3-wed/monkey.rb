require 'pry'

class Monkey

  attr_accessor :name, :species
  #attr_reader -- read only
  #attr_writer -- write only

  def initialize(monkey_name, monkey_species)
    #it will auto-run when you make a Fish
    #source of this variable
    # name = 'dory'
    #increase the scope
    #instance variable
    @name = monkey_name
    @species = monkey_species
    @food_eaten = []

  end
    def eat_food(food)
       @food_eaten.push(food)
    end

def get_species
  @species
end
def set_species(species)
  @species = species
end


    def introduce
      puts "Hi, my name is #{@name} the #{@species} and for food stuffs I consumed #{@food_eaten.join(" and ")}"
    end
    def to_s
      introduce
    end

  end

  binding.pry
