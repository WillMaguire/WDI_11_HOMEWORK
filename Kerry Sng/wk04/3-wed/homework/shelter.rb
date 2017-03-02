# Shelter:
#
# The shelter should display all the clients.
# The shelter should display all the animals.

require 'pry'

class Shelter
  attr_accessor :name, :age, :clients, :animals

  def initialize(name, age, clients={}, animals={})
    @name = name
    @address = address
    @clients = clients
    @animals = animals
  end
end

  def add_client(client) # add client object
    @clients[client.name] = client
  end

  def add_animal(animal)
    @animals[animal.name] = animal
