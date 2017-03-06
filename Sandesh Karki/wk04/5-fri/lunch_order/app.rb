
require 'pry'
require_relative 'lunch_order.rb'


puts "\n**Lunch Order Console**

Please enter you name"
c_name = gets.chomp
customer = Order.new(c_name)

puts "Please enter your order #{c_name}"
c_order = gets.chomp
customer.get_orders(c_order)

puts "Add another item to the order?(y/n)"
c_order = gets.chomp

if (c_order == 'y')
  puts "Please enter your order #{c_name}"
  c_order = gets.chomp
  customer.get_orders(c_order)
end

"All orders:"
puts "\n#{customer.name} your orders:
#{customer.orders.join("\n")}\n\n"

puts "Bon Appetit"
# binding.pry
