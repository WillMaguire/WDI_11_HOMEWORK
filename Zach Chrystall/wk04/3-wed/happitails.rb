require 'pry'
require_relative 'animal'
require_relative 'client'


animals = []
animals_checkedout = []
clients = []



loop do

  puts "MENU:\n1:  Display animals\n2:  Display all clients\n3:  Add an animal\n4:  Add a Client\n5:  Adopt an animal\n6:  Return an animal\n7:  quit"
  user_input = gets.chomp.to_i

  if user_input == 3
    puts "Animal Name?"
    name = "Fido" #gets.chomp
    puts "Age?"
    age = 5 #gets.chomp
    puts "Gender?"
    gender = "M" #gets.chomp
    puts "Species?"
    species = "dog" #gets.chomp
    puts "Any toys?"
    toys = ["chicken", "boink"] #gets.chomp.split(',')
    animals.push(Animal.new(name, age, gender, species, toys))
  elsif user_input == 4
    puts "Client Name?"
    # name = gets.chomp
    name = "Jane Smith"
    puts "Age?"
    age = 4 #gets.chomp
    puts "Number of children?"
    children = 3 #gets.chomp
    puts "Other Pets?"
    pets = [] #gets.chomp.split(',')
    clients.push(Client.new(name, age, children, pets))
  elsif user_input == 1
    animals.each do |animal|
      puts "---------\nName: #{animal.name}\nAge: #{animal.age}\nGender: #{animal.gender}\nSpecies: #{animal.species}\nToys: #{animal.toys}\n"
    end
    puts "---------"
  elsif user_input == 2
    clients.each do |client|
      puts "---------\n#{client.name}\n#{client.age}\n#{client.children}\n#{client.pets}\n"
    end
    puts "---------"
  elsif user_input == 5
    puts "Which client wants a pet?"
    owner = gets.chomp.downcase
    puts "What's the name of the pet?"
    pet = gets.chomp.downcase
    clients.each do |client|
      if client.name.downcase == owner
        animals.each do |animal|
          if animal.name.downcase == pet
            client.pets << pet
            animals_checkedout << animal
            animals.delete_if { |x| x == animal }
          end
        end
      end
    end
  elsif user_input == 6
    puts "What's the name of the pet being returned?"
    pet = gets.chomp.downcase
    clients.each do |client|
      if client.pets.include? pet
        client.pets.delete_if { |x| x == pet }
        animals_checkedout.each do |animal|
          if animal.name.downcase == pet
            animals << animal
            animals_checkedout.delete_if { |x| x == animal }
          end
        end
      end
    end
  elsif user_input == 7
    break
  else
    puts "SORRY I DIDN'T UNDERSTAND THAT"
  end
  # binding.pry
end

# binding.pry
