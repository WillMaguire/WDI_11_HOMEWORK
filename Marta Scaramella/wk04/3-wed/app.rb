require 'pry'
require_relative 'animals'
require_relative 'clients'

@@animals = []
@@clients = []
toys = []

puts "Select your option: \n
1. Display all animals,\n
2. Display all clients,\n
3. Create an animal,\n
4. Create a client,\n
5. Facilitate client adopts an animal,\n
6. Facilitate client puts an animal up for adoption"

choice = gets.chomp.to_i


# loop do
# puts 'Enter in the number you want access'

if choice == 1
  @@animals

elsif choice == 2
  @@clients;

elsif choice == 3
  puts "Name:"
  a_name = gets.chomp
  puts "Age:"
  a_age = gets.chomp.to_i
  puts "Gender:"
  a_gender = gets.chomp
  puts "Species:"
  a_species = gets.chomp
  puts "Toys:"
  a_toys = gets.chomp

  @@animals << Animal.new(a_name, a_age, a_gender, a_species, a_toys)

elsif choice == 4
  puts "Name:"
  c_name = gets.chomp
  puts "Number of children:"
  c_children = gets.chomp.to_i
  puts "Age:"
  c_age = gets.chomp.to_i
  puts "Pets:"
  c_pets = gets.chomp

  @@clients << Client.new(c_name, c_children, c_age, c_pets)

elsif choice == 5
  puts "Client name:"
  client = gets.chomp

elsif choice == 6
  puts "Client name:"

end

binding.pry
