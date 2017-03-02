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

class Lunch
  attr_accessor :name, :item

def initialize(name, item)
  @name = gets.chomp
  @food_order = []

  end
puts "What would you like to order?"

input = gets.chomp



puts "Would you like to add fries to your order?"

input = gets.chomp

def new_order(name, food_order)

end

if input == y
  new_order.new(name, food_order + 'fries')

else
  new_order.new(name, food_order)

end


def get_name
  @name
  end

def set_name(name)
  @name = name
end




end
binding.pry
