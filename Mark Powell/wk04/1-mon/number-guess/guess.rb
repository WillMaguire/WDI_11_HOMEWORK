random_number = Random.rand(1..10)
puts 'Guess a number between 1 and 10'
# puts random_number for testing
#guess = gets.chomp.to_i

# while guess != random_number
#     puts "Nope, try again"
#     guess = gets.chomp.to_i
# end

until (gets.chomp.to_i) == random_number
    if guess > random_number
    puts "Too high"
  else
    puts "Too low"
  end

  #guess = gets.chomp.to_i
end
puts "Good Guess!"
