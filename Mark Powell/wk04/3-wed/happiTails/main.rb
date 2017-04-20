require 'pry'
require "./animals.rb"
require "./client.rb"

shelter = {
  current_pets: [],
  current_clients: []
}

def display_all(shelter)
  puts shelter[:current_clients]
  puts shelter[:current_pets]
end

def display_clients(shelter)
  puts shelter[:current_clients]
end

def display_animals(shelter)
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



# Lets create a menu
puts "Choice?"
menu_choice = gets.chomp.to_i
case menu_choice
when 1
  puts display_animals(shelter)
when 2
  puts display_clients(shelter)
when 3
  add_pet(shelter)
when 4
  add_client(shelter)
else
  puts "Nothing here?"
end


=begin
display all animals
display all clients
create an animal
create an client
facilitate client adopts an animal
facilitate client puts an animal up for adoption
=end
binding.pry
