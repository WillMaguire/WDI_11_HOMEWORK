require 'pry'



loop do

  puts 'enter the first Number: '
  first_number = gets.chomp.to_i
   puts 'enter the second Number: '
   second_number = gets.chomp.to_i
  puts 'enter the operand (+,-, *, /)'
  operator = gets

  if operator == "+"
    result = first_number+second_number
    puts "#{first_number} + #{second_number} = #{result}"

  elsif operator == "-"
   result = first_number - second_number
   puts "#{first_number} - #{second_number} = #{result}"

  elsif operator == "*"
    result= first_number * second_number
    puts "#{first_number} + #{second_number} = #{result}"

  elsif operator == "/"
    result = first_number / second_number
    puts "#{first_number} + #{second_number} = #{result}"

  end

  puts 'enter another calculation? y or n'
  continue = gets

  if continue 

end
