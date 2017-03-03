# It's approaching lunch hour… let's collect orders. Create a new file called `lunch_orders.rb` to complete this exercise.
#
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
#

require 'pry'

class Customer
  attr_accessor :user_name, :user_order

  def initialize(user_name, user_order)
		@user_name = user_name
		@user_order = []

  end

end

class allOrders
  attr_accessor :allOrders

  def initialize()


def take_name
  puts "Hey there what would you like to order?"
  user_name = gets.chomp.to_s

  take_name << new.Customer[:user_name]

end

def order
  puts "What was your name for the order?"
  user_order = gets.chomp.to_s

  order << new.Customer[:user_order]

end

def add_another
  puts "Would you like to add more to your order? yes or no?"
  answer = gets.chomp.to_s
    if answer == "yes" || "y"
      order
    elsif answer == "no" || "n"
      puts "All orders: #{allOrders.}"
    end
end


binding.pry
