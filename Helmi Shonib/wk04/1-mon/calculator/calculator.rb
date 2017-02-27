puts "Would you like to
        1 ---- [add],
        2 ---- [subtract],
        3 ---- [multiply],
        4 ---- [divide]
        5 ---- [exponents]
        6 ---- [square roots]
        7 ---- [exit]"
response = gets.chomp
case response
when '1'
def add_function
  puts "Which numbers would you like to add?"
  numb1 = gets.to_i
  numb2 = gets.to_i
  answer = numb1 + numb2
  puts "Sum of #{numb1} + #{numb2} = #{answer}"
end
add_function()

when '2'
def subtract_function
  puts "Which numbers would you like to subtract"
  numb1 = gets.to_i
  numb2 = gets.to_i
  answer = numb1 - numb2
  puts "Subtraction of #{numb1} - #{numb2} = #{answer}"
end
subtract_function

when '3'
  def multiply_function
    puts "Which numbers would you like to multiply"
    numb1 = gets.to_i
    numb2 = gets.to_i
    answer = numb1 * numb2
    puts "Multiplication of #{numb1} * #{numb2} = #{answer}"
  end
  multiply_function

when '4'
  def divide_function
    puts "Which numbers would you like to divide"
    numb1 = gets.to_i
    numb2 = gets.to_i
    answer = numb1 / numb2
    puts "Division of #{numb1} / #{numb2} = #{answer}"
  end
  divide_function

when '5'
  def exponent_function
    puts "Please enter number base and exponent numbers"
    numb1 = gets.to_i
    numb2 = gets.to_i
    answer = numb1 ** numb2
    puts "Exponents of #{numb1} ** #{numb2} = #{answer}"
  end
  exponent_function

when '6'
  def square_root_function
    puts "Please enter a number"
    numb1 = gets.to_i
    answer = Math.sqrt(numb1)
    puts "Square root of #{numb1} = #{answer}"
  end
  exponent_function

else '7'
  puts "Exit!"
end
