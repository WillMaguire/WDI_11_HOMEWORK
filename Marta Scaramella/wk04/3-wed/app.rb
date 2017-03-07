require 'pry'

require_relative 'animals'
require_relative 'clients'

@animals = []
@clients = []
toys = []

puts "Do you want add an animal/client or display animals/clients? (type add or display)"

choice = gets.chomp


# loop do
# puts 'Enter in the number you want access'

if choice == 'add'
  puts 'do you want add an animal or a client?'
  to_add = gets.chomp

  if to_add == 'animal'
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

    animal_array.push(Animal.new(a_name, a_age, a_gender, a_species))



  elsif to_add == 'client'
    puts "Name:"
    c_name = gets.chomp
    puts "Number of children:"
    c_children = gets.chomp.to_i
    puts "Age:"
    c_age = gets.chomp.to_i
    puts "Pets:"
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
