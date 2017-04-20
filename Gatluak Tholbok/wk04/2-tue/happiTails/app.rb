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


# Hey I kind of messed up with this one. Instead of using the classes like we were supposed to. I went with hashes, some how I got it mixed up. I got really confused using the Classes methods. And I was wondering if I could just ask you two things tomorrow.

#I was able to prompt the user through most of the entire process and I feel as though I didnt do it entirely right. It's like only half done. I got stuck with facilitating client adopts an animal and I'm still unable to get to grasp with how to create a relationship between the client and animal.

#Will you have you have five minutes just to go over just these bits with me with tomorrow? I'm kind of getting things now a little. I think staying back on friday having that hard as time gettings things through my head really helped. Thanks for that one. 
