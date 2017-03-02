

require 'pry'
require_relative 'lunch_order.rb'



puts "**Lunch Order Console**\n\n

Please enter you name"
o_name = gets.chomp

customer = Order.new(o_name)

puts "Please enter your order #{o_name}"
o_order = gets.chomp

customer.get_orders(o_order)

puts "Add another item to the order?(y/n)"
another_order = gets.chomp

if (another_order == 'y')

  puts "Please enter your order #{o_name}"
  o_order = gets.chomp
  customer.get_orders(o_order)

end

"Plese check you order details"

puts "#{customer.name} your orders:\n
#{customer.orders.join(',')}"


binding.pry
