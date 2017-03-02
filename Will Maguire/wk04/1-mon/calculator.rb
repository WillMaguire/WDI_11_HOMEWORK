#made this in about 15-20 mins... not at all happy with it.  Couldn't get the regex calculator working; i think that I could make a really comprehensive calculatorwith regex.


require 'pry'

puts "I am a simple, boring calculator that doesn't use RegEx... I can compute addition, subtraction, multiplication and division; but I'm worth less the a butter passing robot.\n For addition press 1\n For subraction press 2 \n For multiplication press 3 \n For division press 4"

answer = gets.chomp.to_i


 if answer == 1
      puts "Please enter your starting number"
      x = gets.chomp.to_i
      puts "Please enter the number you wish to add to it"
      y = gets.chomp.to_i
      answer = x + y
      puts "Your answer is"
      puts answer
  elsif answer == 2
      puts "Please enter your starting number"
      x = gets.chomp.to_i
      puts "Please enter the number you wish to subtract from it"
      y = gets.chomp.to_i
      answer = x - y
      puts "Your answer is"
      puts answer
  elsif answer == 3
      puts "Please enter your starting number"
      x = gets.chomp.to_i
      puts "Please enter the number you wish multiply it by"
      y = gets.chomp.to_i
      answer = x * y
      puts "Your answer is"
      puts answer
  elsif answer == 4
      puts "Please enter your starting number"
      x = gets.chomp.to_i
      puts "Please enter the number you wish to divide it by"
      y = gets.chomp.to_i
      answer = x / y
      puts "Your answer is"
      puts answer
  else
      puts "ERROR ERROER ERROR: THIS MACHINE WILL SELF-DESTRUCT IN 10 SECONDS"
end
