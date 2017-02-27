random_number = rand(1..10)
puts 'Guess a number between 1 and 10'
# puts random_number
guess = gets.chomp.to_i

# while guess != random_number
#     puts "Nope, try again"
#     guess = gets.chomp.to_i
# end

until guess == random_number
  puts "Nope, try again"
  guess = gets.chomp.to_i
end
puts "Good Guess!"
