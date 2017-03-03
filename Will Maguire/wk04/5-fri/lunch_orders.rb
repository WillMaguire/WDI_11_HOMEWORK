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
    #  * **"All orders: {order data}"**

require 'pry'

class Order
  attr_accessor :order_name, :order_item

  def initialization(order_name, order_item)

    @order_name = order_name
    @order_item = order_item

    def create_new_order
       puts "* ** Name for order:**"
        order_name = gets.chomp


      puts order_name + " wants to order"
       order_items = gets.chomp
    end
end

    puts "Would you like to continue to order?"
      y_n = gets.chomp
      if y_n == 'y'
        create_new_order
      elsif y_n == 'n'
        puts final order .to_s
        #while loop to index through index[0] to find name or customer placing order with if and elsif statements to determine if a true value of order

  end

  def create_new_order
      created_order = Order.new(order_name, order_item)
      fianl_order.push(created_order)
  end

    @order = []
    final_orders=[]






binding.pry
