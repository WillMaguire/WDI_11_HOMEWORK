require 'pry'

require_relative 'animals'
require_relative 'clients'

animal_array = []
toys = []

puts "Do you want add an animal/client or display animals/clients? (type add or display)"

choice = gets.chomp

if choice == 'add'
  puts 'do you want add an animal or a client?'
  to_add = gets.chomp

  if to_add == 'animal'
    puts "What is the name?"
    a_name = gets.chomp
    puts "What the age?"
    a_age = gets.chomp.to_i
    puts "What is the gender?"
    a_gender = gets.chomp
    puts "What is the species?"
    a_species = gets.chomp
    puts "What are his/her toys?"
    a_toys = gets.chomp

    animal_array.push(Animal.new(a_name, a_age, a_gender, a_species))
    


  elsif to_add == 'client'
    puts "What is the name?"
    c_name = gets.chomp
    puts "How many children does he/she has?"
    c_children = gets.chomp.to_i
    puts "How old the new client is?"
    c_age = gets.chomp.to_i
    puts "Does he/she has other animals? If yes what:"
    c_pets = gets.chomp
  end


elsif choice == 'display'
  puts 'Do you want diplay animals or clients? \n (type a for animals or c for clients)'
  choice2 = gets.chomp

    if choice2 == 'a'
      puts 'The animals into the shelter are:'

    elsif choice2 == 'c'
      puts 'The clients of the shelter are:'

    end

end
binding.pry
