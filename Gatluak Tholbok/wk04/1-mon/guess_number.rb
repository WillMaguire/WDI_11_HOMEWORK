# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
#
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
#
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

#
# puts = "guess a number between 0 and 10"
#
# random_number = rand(1..10)
# # puts random_number
# choice = gets.chomp.to_i
#
# until choice == random_number
#   puts 'sorry, enter another guess'
#   choice = gets.chomp.to_i
# end
# puts 'congratulations'

require 'pry'
# Random.rand() is a longer way where as rand() is a shorter way
secret_number = Random.and(1..10) 
# guess = gets.chomp.to_i

while (gets.chomp.to_i) != secret_number do
  if guess < secret_number
  puts 'you will die guess higher'
  else
  puts 'guess guess lower'
  end
  # guess = gets.chomp.to_i
end

puts 'you are doing ok'
