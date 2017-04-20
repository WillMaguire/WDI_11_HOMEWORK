puts "Would you like to sum, sub, div, mult, exp or square?"

operation = gets.chomp.downcase

# puts "Enter the first number of the operation"
# number_1 = gets.to_i
#
# puts "Enter the second number of the operation. For square operation put 0"
# number_2 = gets.to_i

if operation === 'sum'
  puts "What is the first number of the operation?"
  number_1 = gets.to_i
  puts "Which number do you want to add?"
  number_2 = gets.to_i
  puts "The sum of #{number_1} and #{number_2} is #{number_1 + number_2}"
elsif operation === 'sub'
  puts "What is the first number of the operation?"
  number_1 = gets.to_i
  puts "Which number do you want to subtract?"
  number_2 = gets.to_i
  puts "The difference between #{number_1} and #{number_2} is #{number_1 - number_2}"
elsif operation === 'mult'
  puts "Which number do you wish to multiplicate? (int: separate them with ,)"
  numbers = gets
  number_1 = numbers.split(',')[0].to_i
  number_2 = numbers.split(',')[1].to_i
  puts number_1 * number_2
elsif operation === 'div'
  puts "What is the number do you want to divide?"
  number_1 = gets.to_i
  puts "For wich number do you want divide #{number_1}?"
  number_2 = gets.to_i
  puts "#{number_1} divided by #{number_2} is #{number_1 / number_2}"

elsif operation === 'exp'
  puts "What is the base number?"
  number_1 = gets.to_i
  puts "What is the esponent?"
  number_2 = gets.to_i
  puts "#{number_2} times #{number_1} is #{number_1 ** number_2}"
elsif operation === 'square'
  puts "For which number do you want to calculate the square number ?"
  number_1 = gets.to_i
  puts "The square number of #{number_1} is #{number_1 * number_1}"
end
