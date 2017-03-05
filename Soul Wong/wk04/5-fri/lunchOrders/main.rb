require 'pry'
require_relative 'customer.rb'
require_relative 'transaction.rb'
$transaction_id = 1
$customer_db = {
}

def orderFood
  puts "Please enter customer name"
  customer_name = (gets).chomp
  puts "Please enter food selection"
  food_order = gets
  food_order_array = (food_order).gsub("\n",'').split(",")
  food_order_array.each(&:lstrip!)
  custom_order = Transaction.new($transaction_id,customer_name,food_order_array)
  $transaction_id += 1
if newCustomer(customer_name)
  $customer_db[customer_name.to_sym].add_transaction(custom_order)
else
  new_customer = Customer.new(customer_name,custom_order)
  $customer_db[customer_name.to_sym]=new_customer
end
end

def newCustomer(name)
  $customer_db.key?(name.to_sym)
end

def extraFood(customer_name,order_id_extra)
  orderExtra = $customer_db[customer_name.to_sym].food_orders.find{
    |order| order.order_id == order_id_extra
  }
  if orderExtra
    puts "Please enter extra food selection"
    food_order = gets
    extra_foods = (food_order).gsub("\n",'').split(",")
    extra_foods.each(&:lstrip!)
    orderExtra.order_extra(extra_foods)
    return "Successfully Added Items to Order"
  else
    return "Customer Name or Order Id not Found"
  end
end

def removeFood(order_id_edit,customer_name)
  #order_id must match
  orderRemove = $customer_db[customer_name.to_sym].food_orders.find{
    |order| order.order_id == order_id_edit
  }
  if orderRemove
    puts "Please enter the name of food to be removed from order"
    food_remove = gets
    food_remove = (food_remove).gsub("\n",'').split(",")
    food_remove.each(&:lstrip!)
    return orderRemove.order_remove_food(food_remove)
  else
    return "Customer Name or Order Id not Found"
  end
end

loop do
puts "1 - Order Food | 2 - Add Extra | 3 - Remove Food | 4 - Cancel Order | 5 - Send to Kitchen | 6 - Exit"
option = gets.to_i
break if option == 6
end

binding.pry
