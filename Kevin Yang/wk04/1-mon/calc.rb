def calc
  puts "Linus Calculator BETA \n Tap 'x' to quit..."

  while true
    print ">> "
      puts "please enter your calculations"
      input = gets.chomp.split(" ")
      return if input[0] == 'x'


      if input[0].include? "."
        operand1 = input[0].to_f
      else
        operand1 = input[0].to_i
      end

      operator = input[1].to_sym

      if input[2].include? "."
        operand2 = input[2].to_f
      else
        operand2 = input[2].to_i
      end

    output = case operator
      when :+ then operand1 + operand2
      when :- then operand1 - operand2
      when :* then operand1 * operand2
      when :/ then operand1 / operand2
      when :% then operand1 % operand2
      when :** then operand1 ** operand2
      else nil
    end

    puts ">> #{output}"
  end

end

if __FILE__ == $0
  calc
end
