require "pry"

def collect_orders
  puts "#{@customer_name} wants to order:"
  customer_order = gets.chomp.to_s
  return customer_order
end

all_order = {}
puts "Name for order:"
@customer_name = gets.chomp.to_s
all_order[:Name] = @customer_name
agregate_order = []
customer_response = 'y'
while customer_response == 'y' do
  agregate_order.push(collect_orders())
  puts "Add another item to the order? (y/n)"
  customer_response = gets.chomp
end
all_order[:Order] = agregate_order
puts "All orders: #{all_order}"
