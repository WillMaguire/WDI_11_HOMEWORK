# It's approaching lunch hour… let's collect orders.
# Create a new file called `lunch_orders.rb` to complete this exercise.
#
# 1. Create a program that collects lunch orders. Prompt:
#      * **Name for order:** (enter name)
#      * **{name} wants to order:** (enter item)
# 2. Store the name/order data. When storing data, do it in such a way that
# additional order items may be added for the person's name.
# #      * Example: **Greg** can order a *Burger*, and then add *Fries* to his order later.
# # 3. After storing data, prompt the user with:
# #      * **Add another item to the order? (y/n)**
# #      * Repeat steps 1 & 2 if the answer is "y"
# # 3. After the user completes adding orders, print out:
# #      * **"All orders: {order data}"**
require 'pry'

puts "Can I have your name please?"
puts "What would you like to order?"
puts "Would you like fries with your order?"

class Lunch
  attr_accessor :name, :item

  #accessor is a short cut to allow us to access the attributes above.
  # so that we dont need to define name and item

def initialize(name, item)
  @name = gets.chomp
  @food_order = []


  end

food_order = gets.chomp

def new_order(name, food_order)

if input == 'y'
  new_order.new(name, food_order + 'fries')

else
  new_order.new(name, food_order)

end






end
binding.pry
