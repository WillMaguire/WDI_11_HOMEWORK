# require 'pry'
# require_relative 'client.rb'
# require_relative 'animal.rb'

animal_shelter = Hash.new
client_shelter = Hash.new


puts "What is your name?"
client_shelter["client"] = gets.chomp.capitalize

puts "How old are you?"
client_shelter["age"] = gets.chomp.to_i

puts "How many children do you have?"
client_shelter["children"] = gets.chomp.to_i

puts "How many pets do you have?"
client_shelter["pets"] = gets.chomp.split

# Does the client have any pets

puts "What is your animal's name?"
animal_shelter["name"] = gets.chomp.capitalize

puts "How old is your animal?"
animal_shelter["age"] = gets.chomp.to_i

puts "What is it's gender??"
animal_shelter["gender"] = gets.chomp.capitalize

puts "What species is it?"
animal_shelter["species"] = gets.chomp.capitalize

puts "List the amount of toys your animal have?"
animal_shelter["toys"] = gets.chomp.split

puts animal_shelter
puts
puts client_shelter
