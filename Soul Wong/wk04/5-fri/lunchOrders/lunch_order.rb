require 'pry'
order = {
  :name => "",
  :food => []
}

puts "**Name for order:**"
customer_name = gets
puts "**#{customer_name} wants to order: **"
food_item = gets
order[:name] = customer_name
order[:food] << food_item

loop do
  puts " **Add another item to the order? (y/n)**"
  option = gets.chomp

binding.pry
  case option
  when "y"
    puts "What extras would you like?"
    extra_food = gets
    order[:food] << extra_food
  when "n"
    puts "hello"
  else
    puts "Invalid Selection"
  end
  break if option == "n"
end
