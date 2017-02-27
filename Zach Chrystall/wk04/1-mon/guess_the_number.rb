require 'fileutils'
require 'pry'

puts "what number do you want to guess up to?"
high_number = gets.to_i
computer_number = rand(1..high_number)

loop do
  puts "pick a number from 1 to #{high_number}"
  guess = gets.to_i
  if guess == computer_number
    puts "You got it!"
    break
  elsif guess > computer_number
    puts "lower than that!"
  elsif guess < computer_number
    puts "higher than that!"
  end
end
