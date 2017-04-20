require 'pry'


puts "Please guess a number between 0 and 10"
input = gets.to_i
number = rand 0..10
puts number

if input == number
  puts "Congrats"
else
  puts "Please guess another number"
end
