require 'pry'

client_order = []

puts 'Name for order:'
name_order = gets.chomp

puts "#{name_order} wants to order:"
item = gets.chomp
client_order.push(item)

puts "Add another item to the order? (y/n)"
another_order = gets.chomp

while another_order == "y" do
  puts "#{name_order} wants to order:"
  item = gets.chomp
  client_order.push(item)
  puts "Add another item to the order? (y/n)"
  another_order = gets.chomp
end

while another_order == "n" do
    puts "All orders for #{name_order}: #{client_order.join(", ")} "
    break
end

binding.pry
