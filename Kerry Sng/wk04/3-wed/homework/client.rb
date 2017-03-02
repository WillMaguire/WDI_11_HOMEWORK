require 'pry'

class Client
  attr_accessor :name, :no_of_children, :age, :list_of_pets

def initialize(name, no_of_children, age, list_of_pets = [])
  @name = name
  @no_of_children = no_of_children
  @age = age
  @list_of_pets = list_of_pets

def adopts(animal_name, shelter)
  client_animal =  shelter.animal.delete(animal.name)
  @list_of_pets(animal.name) = client_animal

end
end
