menu = gets "Welcome to the calculator! To select an operation enter 1 for add, 2 for subtraction, 3 for mulitplication and 4 for division"

  if menu == 1
    return "add"
  elsif menu == 2
    return "subtract"
  elsif menu == 3
    return "multiply"
  elsif menu == 4
    return "divide"
  else return "command not found"

end

puts "please enter your first number"
  num1 = gets.to_i() #to_i turns a number into a string

puts "please enter your second number"
  num2 = gets.to_i()

add = num1 + num2
subtract = num1 - num2
multiply = num1 * num2
divide = num1 / num2
