require 'pry'
require "./animals.rb"
require "./client.rb"

shelter = {
  current_pets: [],
  current_clients: []
}

def displayAll(shelter)
  puts shelter[:current_clients]
  puts shelter[:current_pets]
end

def add_pet(shelter)
  puts "Enter pet name"
  animal_name = gets.chomp

  puts "Enter pets age"
  animal_age = gets.chomp

  puts "Pet gender? Male/Female"
  animal_gender = gets.chomp

  puts "pet species"
  animal_species = gets.chomp

  puts "Pets toys? (separate with commas)"
  animal_toys = gets.chomp.slice(',')

  animalObject = Animal.new(animal_name, animal_age, animal_gender, animal_species)
  shelter[:current_pets].push(animalObject)
end

def add_client(shelter)
  puts "Enter client name"
  client_name = gets.chomp

  puts "Enter number of children"
  client_child_amount = gets.chomp

  puts "Enter client age"
  client_age = gets.chomp

  clientObject = Client.new(client_name, client_child_amount, client_age, )
  shelter[:current_clients].push(clientObject)
end

binding.pry
