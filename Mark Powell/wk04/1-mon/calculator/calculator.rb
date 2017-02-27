require "pry"

def plus(a, b)
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a + b
  puts result
end

def subtract(a, b)
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a - b
  puts result
end

def multiply(a, b)
  a = gets.chomp.to_i
  b = gets.chomp.to_i
  result = a * b
  puts result
end

def divide(a, b)
  a = gets.chomp.to_f
  b = gets.chomp.to_f
  result = a / b
  puts result
end
