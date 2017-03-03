require 'pry'



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

  lunch_order = {}

  puts "Name for order:"
  name = gets.chomp

  puts "#{name} wants to order:"
  order = gets.chomp

  lunch_order[:name]  = name
  lunch_order[:order] = [order]

  puts "add another item to the order (y/n)?"
  add_another_item = gets.chomp

    while add_another_item != "n" do

      puts "enter additional item"
      add_order = gets.chomp

      lunch_order[:order].push(add_order)

      puts "add another item to the order (y/n)?"
      add_another_item = gets.chomp

    end


      puts "#{name} can order a #{order}, and then add #{add_order} to his order later."

binding.pry
