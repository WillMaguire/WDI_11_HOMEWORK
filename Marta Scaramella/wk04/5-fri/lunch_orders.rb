require 'pry'

client_order = Hash.new
client_order[:order] = []

puts 'Name for order:'
client_name = gets.chomp
client_order[:name] = client_name

puts "#{client_name} wants to order:"
item = gets.chomp
client_order[:order] << item

puts "Add another item to the order? (y/n)"
add_item = gets.chomp

while add_item == "y" do
  puts "#{client_name} wants to order:"
  item = gets.chomp
  client_order[:order] << item
  puts "Add another item to the order? (y/n)"
  add_item = gets.chomp
end

while add_item== "n" do
    puts "All orders for #{client_name}: #{client_order[:order].join(", ")} "
    break
end

binding.pry
