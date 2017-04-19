# You are to generate a basic "guess my number" game.
# The computer will pick a random number between 0 and 10.
# The user will guess the number until they guess correctly.

require 'pry'



random = rand(0..10)



loop do
  puts 'Hello there, guess the number between 1 and 10'
  guess = gets.to_i

  if guess == random
      puts "you have a match!"
      break
  elsif guess < random
      puts "Your guess is smaller that the random number"
      
  else
      puts "Your guess is bigger that the random number"
    end

end
