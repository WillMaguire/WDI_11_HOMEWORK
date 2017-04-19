require 'pry'
require_relative 'lunch.rb'


puts "**Lunch Order Console**"



  puts "Please type name before order"
  p_name = gets.chomp
  customer = Lunch.new(p_name)

  puts "What would you like to order"
  p_item = gets.chomp
  customer.get_items(p_item)


  puts "Would you like to add another item to the order?(y/n)"
  another_item = gets.chomp


    if (another_item == 'y')

      puts "Please type your order"
      p_item = gets.chomp
      customer.get_items(p_item)

    end
  "Let's confirm your order details:"



  puts "#{customer.name} your orders:\n
  #{customer.items.join(',')}"

# binding.pry
