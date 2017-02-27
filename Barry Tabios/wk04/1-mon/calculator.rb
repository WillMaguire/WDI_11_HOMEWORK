# Calculator
#
# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
#
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
#
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4


# *****************************************************************************
require 'fileutils' # standard libary
require 'pry' # because I need the debugging methods

# This process should continue until the user selects a quit option from the menu
# Phase 1

# Advanced Calculator functionality
# # Calculator should be able to do basic arithmetic (exponents, square roots)
# # Phase 3


result = 0
operation = false


while operation != 'QUIT' do

  puts('Please enter numbers to perform the operation')
  puts('Please enter input 1')
  numb1 = gets().to_i

  puts('Please enter input 2')
  numb2 = gets().to_i


  puts('Enter your choice of - ADDITION / SUBTRACT / DIVIDE / MULTIPLY / EXPONENTS / SQUARE ROOTS or QUIT to exit program ')
  operation = gets().strip()

  case operation
  when 'ADDITION'
    result = numb1 + numb2
    puts("result is: #{result}")
  when 'SUBTRACT'
    result = numb1 - numb2
    puts("result is: #{result}")
  when 'DIVIDE'
    result = numb1 / numb2
    puts("result is: #{result}")
  when 'MULTIPLY'
    result = numb1 * numb2
    puts("result is: #{result}")
  when 'EXPONENTS'
    result = numb1**numb2
    puts("result is: #{result}")
  when 'SQUARE ROOTS'
    root1 = Math.sqrt(numb1)
    root2 = Math.sqrt(numb2)
    puts("Square root of #{numb1} is #{root1}")
    puts("Square root of #{numb2} is #{root2}")
  end

end
