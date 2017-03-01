puts ="enter a random number"

guess = gets.chomp.to_i

random_number = rand(11)

while guess != random_number do

  if guess > random_number
    puts "guess lower!"

  elsif guess < random_number
    puts "guess higher!"

  guess = gets()

    end

end

puts "congratulations you got it right!"
