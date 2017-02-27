# Title: Guess The Number
#
# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!


require 'fileutils' # standard libary
require 'pry' # because I need the debugging methods


random_number = rand(10 - 0) + 0

puts('Part 1')
puts('guess the number between 0 and 10. Enter your guess')
user_guess = gets().to_i


while user_guess != random_number do
  puts('wrong number, please try again')
  puts(random_number)
  user_guess = gets().to_i # use to_i converts input to an integer
end

puts('congratulatios - you have entered the correct number')

# ************************************************


puts('Part 2')
puts('enter a maximum number')
max_number2 = gets().to_i

random_number = rand(max_number2 - 0) + 0
puts(random_number)


puts("guess the number between 0 and + #{random_number}")
user_guess = gets().to_i

while user_guess != random_number do
  if user_guess < random_number
    puts('guess higher')
  else
    puts('guess lower')
  end
  user_guess = gets().to_i
end

puts('congratulatios - you have entered the correct number')
