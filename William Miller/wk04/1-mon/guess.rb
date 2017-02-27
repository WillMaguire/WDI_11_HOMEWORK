puts ="enter a random number"

random_number = rand(11)

guess = gets()

while guess != random_number

  if guess > random_number
    puts "guess lower!"

  if guess < random_number
    puts "guess higher!"
  guess = gets()
    end

end

puts "congratulations you got it right!"
