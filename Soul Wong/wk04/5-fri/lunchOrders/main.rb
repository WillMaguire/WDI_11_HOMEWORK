require_relative 'customer.rb'
require_relative 'transaction.rb'

def orderFood
  puts "Please enter customer number"
  customer_name = gets
  puts "Please enter food selection"
  food_order = gets
  transaction(,customer_name,(food_order).split(","))
end
