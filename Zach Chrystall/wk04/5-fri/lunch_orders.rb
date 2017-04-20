require 'pry'

orders = {}

loop do
  puts "Name for order"
  name = gets.chomp

  puts "#{name} wants to order"
  order = gets.chomp

  orders[name.to_sym] = [order]

  puts "Add another item to the order (y/n)"
  wants_another_item = gets.chomp

  while wants_another_item == 'y'
    puts "#{name} wants to order"
    order = gets.chomp
    orders[name.to_sym].push order
    puts "Add another item to the order (y/n)"
    wants_another_item = gets.chomp
  end

  puts "add another persons order (y/n)"
  add_another_person = gets.chomp

  if add_another_person == 'n'
    break
  end
end

puts "All orders: #{orders}"

# orders.each do |person, order|
#   puts "--------\n"
# end
