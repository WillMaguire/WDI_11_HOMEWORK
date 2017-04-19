

exit = false

while exit == false do

    puts " \n\n***Simple Calculator Menu***
     1. Add
     2. Subtraction
     3. Multiplication
     4. Division
     5. Exponents
     6. Square roots
     7. Exit\n "

    puts " Please choose any one option to prefrom calculation"

    get_option = Integer(gets)

    if get_option <= 5
      puts " Please enter numbers to preform calculation seperated by enter"
      num1 = Float(gets)
      num2 = Float(gets)
    end

    if get_option == 5
      puts " Please enter base and exponent seperated by enter"
      base = Integer(gets)
      expo = Integer(gets)
    end

    if get_option == 6
      puts " Please enter a number"
      num1 = Integer(gets)
    elsif get_option == 7
      puts "Have A Nice Day!!"

    end

    puts case get_option
      when 1
        "Addition: #{num1 + num2}"
      when 2
        "Subtraction: #{num1 - num2}"
      when 3
        "Multiplication: #{num1 * num2}"
      when 4
        "Division: #{num1 / num2}"
      when 5
        "Exponent: #{base **= expo}"
      when 6
        "Squar Root: {Math.sqrt(num1)}"
      when 7
         exit = true;
      else
        "Please Enter Correct Option"
        get_option = Integer(gets)
      end
end
