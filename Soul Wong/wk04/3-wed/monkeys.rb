require 'pry'
class Monkey
	#Ruby method to allow write and read access to the variables
	attr_accessor :name, :species
	def initialize(monkey_name,monkey_species)
		@name = monkey_name
		@species = monkey_species
		@food_eaten = []
	end

	def eat(food)
	@food_eaten.push(food)
	end

	def food_in_stomach
	return @food_eaten.join(" and ")

	end

	def introduce
		return "Hi my name is #{@name}. I am a #{@species}. I had #{food_in_stomach} for brunch"
	end

	def to_s
		introduce
	end

end
binding.pry