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
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

puts 'Enter in a maximum value'
max = gets.to_i
puts "Enter in a number from 0- #{max} to guess"
guess = gets.to_i
random_number = rand(max)
correct = false

while correct == false
  if guess == random_number
    puts "Congratulations you got the correct number it was #{guess}"
    correct = true
  elsif guess < random_number
    puts "Wrong, guess higher!"
    guess = gets.to_i
  elsif guess > random_number
    puts "Wrong, guess lower!"
    guess = gets.to_i
  end
end
