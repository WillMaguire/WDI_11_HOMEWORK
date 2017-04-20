require 'fileutils'
require 'pry'

puts "Enter the number of the operation \nyou would like to perform\n
1.  addition\n2.  subtraction\n3.  division\n4.  multiplication\n5.  exponential\n6.  n'th root"


operation = gets.to_i

puts "how many numbers do you want to deal with?"
number_operands = gets.to_i

puts "First number?"
numbers = [gets.to_i]

while numbers.length < number_operands
  if operation == 5
    puts "To the power of?"
    numbers.push gets.to_i
  elsif operation == 6
    puts "To which root?"
    numbers.push gets.to_i
  else
    puts "Next Number?"
    numbers.push gets.to_i
  end
end

answer = numbers[0]
index = 1
while index < number_operands
  if operation == 1
    answer += numbers[index]
  elsif operation == 2
    answer -= numbers[index]
  elsif operation == 3
    answer /= numbers[index]
  elsif operation == 4
    answer *= numbers[index]
  elsif operation == 5
    answer **= numbers[index]
  elsif operation == 6
    answer **= (1.0/numbers[index])
  end
  index += 1
end

puts answer
