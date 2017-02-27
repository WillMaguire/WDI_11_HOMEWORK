puts "Calculator"

operation = 0

while operation != 7
  puts "Choose an operation from the menu below (enter the operation number e.g. for Add enter 1):\n" +
    "(1) Add\n" +
    "(2) Subtract\n" +
    "(3) Multiply\n" +
    "(4) Divide\n" +
    "(5) Exponent\n" +
    "(6) Square root\n" +
    "(7) Quit"

  operation = Integer(gets)

  if operation == 7
    break
  end

  puts "Enter the values (each separated by a space) on which the operation will be performed:"

  operands = gets.split.map { |x| Integer(x) }

  if operation == 1
    result = operands.reduce(:+)
  elsif operation == 2
    result = operands.reduce(:-)
  elsif operation == 3
    result = operands.reduce(:*)
  elsif operation == 4
    result = operands.reduce(:/)
  elsif operation == 5
    result = operands.reduce { |a, b| a ** b }
  else
    result = operands.map { |x| x ** 0.5 }
  end

  puts "Result: #{ result }"
  puts ""
end

puts "Thank you for using me!"
