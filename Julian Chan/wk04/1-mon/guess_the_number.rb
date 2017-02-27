puts "Welcome to Guess The Number"

puts "Choose a maximum value"
answer = rand(Integer(gets) + 1)


puts "Guess a number"
guess = Integer(gets)

while guess != answer
  if guess < answer
    puts "Wrong, guess higher!"
  else
    puts "Wrong guess lower!"
  end

  guess = Integer(gets)
end

puts "Congrats! The number was #{ answer }"
