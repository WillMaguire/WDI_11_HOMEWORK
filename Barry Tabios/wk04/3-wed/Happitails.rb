# HappiTails
#
# Objectives:
#
# Practice creating objects
#
# You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
#
# Specification:
#
# Object Specs:
#
# Animal:
#
# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.

# Client:
#
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.
# Shelter:
#
# The shelter should display all the clients.
# The shelter should display all the animals.
# Relationships:
#
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption
# Phase 1
#
# Can create animals and clients
# Phase 2
#
# New animals and clients can be added to the shelter
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4
#
# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process


require_relative 'animal.rb'
require_relative 'client.rb'

customer_counter = 0
animal_counter = 0
animal_id = [] #stores the objects animals in an array
customer_id =[] #stores the objects customers in an array

# CREATE MENU
puts "1. Display all animals \n2. Display all clients \n3. Create an animal \n4. Create a Client \n5. Facilitate client adopts an animal \n6. Facilitate client puts an animal up for adoption\n7. EXIT PROGRAM"

while (input = gets().to_i) != 7 do
  case input
    when 1 #1. Display all animals
      puts "testing"
      animal_id[0]

    when 2
      puts "2. Display all clients"
    when 3 #3. Create an animal"
      puts 'Enter animal name'
      name = gets().chomp()

      puts 'Enter age'
      age = gets().to_i()

      puts 'Gender'
      gender = gets().chomp()

      puts 'Species'
      species = gets().chomp()

      animal_id[animal_counter] = Animal.new(name, age, gender, species)

      animal_counter += 1
    when 4
      puts "4. Create a Client"
    when 5
      puts "5. Facilitate client adopts an animal"
    when 6
      puts "6. Facilitate client puts an animal up for adoption"
    end

    puts "1. Display all animals \n2. Display all clients \n3. Create an animal \n4. Create a Client \n5. Facilitate client adopts an animal \n6. Facilitate client puts an animal up for adoption\n7. EXIT PROGRAM"
end


binding.pry
