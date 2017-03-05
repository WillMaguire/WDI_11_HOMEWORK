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
require 'pry'
indi_orders = []

class Lunch
  attr_reader :name, :order
  def initialize (name, order)
    @name = name
    @order = order
  end
end

class Invoice
  attr_reader :final_order
  def initialize()
    @final_order = []
  end

  def add_order order
    @final_order << order
  end
end

invoice = Invoice.new
invoice.add_order(Lunch.new("gerard",["coke", "burger"]))
invoice.add_order(Lunch.new("michael",["banana", "salad"]))
invoice.add_order(Lunch.new("wendy",["fries", "tomato sauce"]))

loop do
  print "hello can i help you? (y/n)"
  service = gets.chomp
  if service.downcase == "y"
    print "Name for order: "
    name = gets.chomp
    print "wants to order: "
    order = gets.chomp
    indi_orders.push(order)
    loop do
      print "Add another item to the order? (y/n): "
      prompt = gets.chomp
      if prompt.downcase == "y"
        print "what else would you like: "
        order = gets.chomp
        indi_orders.push(order)
      else
        puts "#{name} your orders are #{indi_orders.join(", ")}"
        invoice.add_order(Lunch.new(name,indi_orders))
        break
      end
    end
  else
    break
  end
end

invoice.final_order.each { |chr| puts "#{chr.name} ordered #{chr.order.join(', ')}"  }

# binding.pry
