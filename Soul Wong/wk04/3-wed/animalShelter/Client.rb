# Client:

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.


class Client
	attr_accessor :name, :age, :children, :pets
	def initialize (client_name,client_children,client_age,client_pets)
		@name = client_name
		@age = client_age
		@children = client_children
		@pets = client_pets
	end

	def addPets(newPet)
		@pets << newPet
	end


end
