

puts "Please enter maximum guess value"
max = Integer(gets)

puts "Please guess number between 0 - #{max}"
userInput = Integer(gets)

randNum = Random.rand(1..max)

won = false

puts "random: #{randNum}"
puts "userInput: #{userInput}"

while  won == false

    if userInput == randNum
      puts "Congratulations!!"
      won = true

    elsif userInput > randNum
      puts "Wrong, guess lower!"
      userInput = Integer(gets)

    else userInput < randNum
      puts "Wrong, guess higher!"
      userInput = Integer(gets)

    end

  end
