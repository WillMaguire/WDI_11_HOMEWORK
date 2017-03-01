puts "Type 1 to add, 2 to subtract, 3 to multipy, 4 to divide"

operation_selection = gets()

calculate_answer(operation_selection, a,b)

if operation_selection == 1
   return "add"
  elsif operation_selection == 2
    return "divide"
  elsif operation_selection == 3
    return "multipy"
  elsif operation_selection == 4
    return "divide"
  else
    return "error"
  end



def calculate_answer(operator, a, b)
  if operator == "add"
    return result = a + b
  elsif operator == "subtract"
    return result = a - b
  elsif operator == "multiply"
    return result = a * b
  elsif operator == "divide"
    return result = a / b
    end
  end

calculate_answer(operator, a, b)
