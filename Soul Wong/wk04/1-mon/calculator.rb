def squareRoot(x)
	puts "Square root of #{x} is #{Math.sqrt(x)}"
end

def Addition(x,y)
  puts "#{x} + #{y} is #{x + y}"
end

def Subtraction(x,y)
  puts "#{x} - #{y} is #{x - y}"
end

def Division(x,y)
  puts "#{x} / #{y} is #{x / y}"
end

def Multiplication(x,y)
  puts "#{x} * #{y} is #{x * y}" 
end

def exponent(x,y)
	puts "#{x} ^ #{y} is #{x ** y}" 
end

def getUserInput()
	numbers = []
	puts "Please enter the first number"
	number_one = gets.chomp.to_i
	puts "Please enter the second number"
	number_two = gets.chomp.to_i
	numbers=[number_one,number_two]
end

option = 0

while option != 8
	puts "1 +Addition+, 2 -Subtraction-, 3 /Division/ , 4 *Multiplication* \n 5 **Exponent** , 6 Square Root  , 7 EXIT"
	option = gets.chomp.to_i

	case option
  	when 1
    	puts "Addition"
    	numSet = getUserInput()
    	Addition(numSet[0],numSet[1])

  	when 2
    	puts "Subtraction"
    	numSet = getUserInput()
    	Subtraction(numSet[0],numSet[1])

  	when 3
    	puts "Division"
    	numSet = getUserInput()
    	Division(numSet[0],numSet[1])

  	when 4
  		puts "Multiplication"
  		numSet = getUserInput()
  		Multiplication(numSet[0],numSet[1])

  	when 5
  		puts "Exponent"
  		numSet = getUserInput()
  		exponent(numSet[0],numSet[1])

  	when 6
  		puts "Square Root"
  		puts "Please provide your input"
  		squareRoot(gets.chomp.to_i)

  	when 7
  		puts "Thank you"
  		option = 8;
  		break
	end

end
