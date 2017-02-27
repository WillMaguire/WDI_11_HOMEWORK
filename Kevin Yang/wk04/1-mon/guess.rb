puts 'what is the maximum number I can think of'

x = gets.chomp.to_i
actualInput = rand(x)
userInput = gets.chomp.to_i

    puts "What's the number that I was thinking of"
    userInput = gets.chomp.to_i

    until userInput == actualInput do
      if userInput < actualInput then puts 'Too small, try again'
      elsif userInput > actualInput then puts 'Too big, try again'
      end
      userInput = gets.chomp.to_i
    end
    puts "You guessed my number!"
