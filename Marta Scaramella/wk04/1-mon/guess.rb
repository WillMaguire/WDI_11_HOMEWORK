require 'pry'

puts 'Choose the number for the limit for the game'

limit = gets.to_i

puts  "choose a number between 0 and #{limit}"

# user_number = gets.to_i

pc_number = rand(0 .. limit )

while gets.to_i != pc_number do
  if user_number > pc_number
    puts "Try with a lower number!"
  else
    puts "Try with a higher number!"
  end
  # user_number = gets.to_i
end

puts 'You win!'

# if user_number === pc_number
#   puts "Congratulations, you win!"
# elsif user_number > pc_number
#   puts "Try with a lower number!"
#     user_number = gets.to_i
# else
#   puts "Try with a higher number!"
#     user_number = gets.to_i
# end
