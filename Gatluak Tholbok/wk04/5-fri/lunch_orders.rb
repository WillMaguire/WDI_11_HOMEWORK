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

def lunch_orders
  puts "#{@customer_name} wants to order."
  customer_name = gets.chomp.to_s
  return customer_name
end

all_orders = {}
puts "What do you want?"

@customer_name = gets.chomp.to_s
all_orders[:Name] = @customer_name
orders = []
customer_input = 'y'

while customer_input == 'y' do
  orders.push(lunch_orders())
  puts 'would you like another order? (y/n)'
  customer_input == gets.chomp
end

all_orders[:Orders] = orders
puts "All orders: #{all_orders}"
