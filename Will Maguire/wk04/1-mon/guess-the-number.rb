# Create a random number generator that the user has to guess


player = 'loser'
answer = Random.rand(1..10)
  while player == 'loser'
      puts "Pick a number between 1 and 10"
      guess = gets.chomp.to_i
         if guess == answer
           player = 'winner'
           puts 'YOU WIN'
         elsif guess != answer
           player = 'loser'
           puts 'YOU LOSER!'
 end
end
