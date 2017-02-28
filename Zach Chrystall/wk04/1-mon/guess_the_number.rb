require 'fileutils'
require 'pry'

puts "what number do you want to guess up to?"
high_number = gets.to_i
computer_number = Random.rand(1..high_number)
counter = 0

loop do
  counter += 1
  puts "pick a number from 1 to #{high_number}"
  guess = gets.to_i
  if guess == computer_number
    puts "You got it! After #{counter} goes"
    break
  elsif guess > computer_number
    puts "lower than that!"
  elsif guess < computer_number
    puts "higher than that!"
  end
end
