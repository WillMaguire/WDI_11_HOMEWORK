# Object Specs:

# Animal:

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.

class Animal
	attr_accessor :name, :species, :gender, :species, :toys
	def initialize (animal_name,animal_age,animal_sex,animal_species,toys_array)
		@name = animal_name
		@age = animal_age
		@gender = animal_sex
		@species = animal_species
		@toys = toys_array
	end
end
