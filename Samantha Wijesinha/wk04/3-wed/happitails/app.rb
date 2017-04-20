require 'pry'

require_relative 'animal.rb'
require_relative 'client.rb'


animal_array = []
client_array = []
request = 0



loop do request != 5
  puts "Enter 1 to display Animals \n Enter 2 to display Clients \n Enter 3 to create an Animal \n Enter 4 to create a client \n 5 to Exit"
  request = gets.to_i

  if request == 1

    animal_array.each do |(a,b)|
      puts "Animal List: #{a} #{b}"
    end
    request = 0
  elsif request == 2
    client_array.each do |(x,y)|
      puts "Client List: #{x} #{y}"
    end
    request = 0
  elsif request == 3
      puts "Enter Animal Name:"
      animal_name = gets.chomp
      puts "Enter Animal Age"
      animal_age = gets.chomp.to_i
      puts "Enter Animal Gender"
      animal_gender = gets.chomp
      puts "Enter Animal Species"
      animal_species = gets.chomp
      puts "Enter Animal Toys"
      animal_toys = gets.chomp


      request = 0

  elsif request == 4
    puts "Enter Client Name:"
    client_name = gets.chomp
    puts "Enter Client Number of Children"
    client_children = gets.chomp.to_i
    puts "Enter Client Age"
    client_age = gets.chomp.to_i
    puts "Enter Pets"
    client_pets = gets.chomp



    request = 0


  elsif request == 5
  break

  end
  animal_array.push(Animals.new(animal_name, animal_age, animal_gender, animal_species))
  animal_array.last.a_toys.push(animal_toys)
  client_array.push(Clients.new(client_name, client_children, client_age))
  client_array.last.c_pets.push(client_pets)
end






# Relationships:
#
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption





binding.pry
