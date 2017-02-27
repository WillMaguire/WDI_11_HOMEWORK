require 'pry'

puts 'Please enter minimum number'
min_number = gets
puts 'Please enter maximum number'
max_number = gets

random_number = Random.rand(min_number.to_i..max_number.to_i)

x = false

while x == false
  puts 'Guess the number'
  user_guess = gets
  if user_guess.to_i != random_number
    if user_guess.to_i > random_number
      puts 'Wrong, guess lower!!'
    elsif user_guess.to_i < random_number
      puts 'Wrong, guess higher!!'
    end
  else
    x = true
    puts 'Congratulations!!' + random_number.to_s
  end
end
