def get_numbers
  puts 'First Number:'
  x = gets.chomp.to_i
  puts 'Second Number:'
  y = gets.chomp.to_i
  yield(x,y)
end

def sum(x,y)
  x + y
end

def sub(x,y)
  x - y
end

def mul(x,y)
  x * y
end

def div(x,y)
  x / y
end

def exp(x,y)
  x**y
end

def sqrt(x,y)
  first_square_root = Math.sqrt(x).to_s
  second_square_root = Math.sqrt(y).to_s
  puts 'Square Roots: ' + first_square_root + ', ' + second_square_root
end


n = 0
while n != 7
  
  puts "Choose Option :
  1. For SUM
  2. For SUB
  3. For MUL
  4. For DIV (first number is dividend and second number is divisor)
  5. For EXP (first number is base and second number is power)
  6. For SQRT (Please enter two numbers that you want to find the square roots)
  7. Exit
  "

n = gets.chomp.to_i

  case n
    when 1
      get_numbers do |x,y,z|
        puts "Sum: #{sum(x,y)}"
      end
    when 2
      get_numbers do |x,y,z|
        puts "Sub: #{sub(x,y)}"
      end
    when 3
      get_numbers do |x,y|
        puts "Mul: #{mul(x,y)}"
      end
    when 4
      get_numbers do |x,y|
        puts "Div: #{div(x,y)}"
      end
    when 5
      get_numbers do |x,y|
        puts "Exp: #{exp(x,y)}"
      end
    when 6
      get_numbers do |x,y|
        puts "#{sqrt(x,y)}"
      end
  end
end
