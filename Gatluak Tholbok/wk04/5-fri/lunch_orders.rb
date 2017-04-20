# require 'pry'


# It's approaching lunch hour… let's collect orders. Create a new file called `lunch_orders.rb` to complete this exercise.

# 1. Create a program that collects lunch orders. Prompt:
#      * **Name for order:** (enter name)
#      * **{name} wants to order:** (enter item)
# 2. Store the name/order data. When storing data, do it in such a way that additional order items may be added for the person's name.
#      * Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.
# 3. After storing data, prompt the user with:
#      * **Add another item to the order? (y/n)**
#      * Repeat steps 1 & 2 if the answer is "y"
# 3. After the user completes adding orders, print out:
#      * **"All orders: {order data}"**

require 'pry'
require_relative 'orders.rb'

puts "Please name order"
name = gets.chomp

customer = Orders.new(name)

puts "#{name} to order #{orders}"
orders = gets.chomp
customer.ordr(orders)

puts "Would you like to add another order?"

if gets.chomp != "no" then
  puts "#{name} wants another order"
  orders = gets.chomp
  customer.ordr(orders)
  puts "another order? yes/no"
end
