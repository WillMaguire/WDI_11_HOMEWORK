require "pry"

def collect_orders
  puts "#{@customer_name} wants to order:"
  customer_order = gets.chomp.to_s
  return customer_order
end

def single_client
  client_order = {}
  puts "Name for order:"
  @customer_name = gets.chomp.to_s
  client_order[:Name] = @customer_name
  agregate_order = []
  customer_response = 'y'
  while customer_response == 'y' do
    agregate_order.push(collect_orders())
    puts "Add another item to the order? (y/n)"
    customer_response = gets.chomp
  end
  client_order[:Order] = agregate_order
  return client_order
end

all_order = []
usr_response = 'y'
while usr_response == 'y'
  all_order.push(single_client())
  puts "Do you have another customer who like to order? (y/n)"
  usr_response = gets.chomp
end
puts "All Order: #{all_order}"



# @all_order = []
# input = 'y'
# while input == 'y'
# puts "Is it a new customer?(y/n)"
# usr_input = gets.chomp
#   if usr_input == 'y'
#       @all_order.push(single_client())
#     else
#       puts "Please enter client's name"
#       existing_customer_name = gets.chomp
#       existing_customer = all_order.find{ |x| x[:Name] = existing_customer_name }
#       existing_customer[:Order].push(collect_orders())
#   end
# end
# puts "All Order: #{all_order}"
#   #
#   # puts "Do you have another customer who like to order? (y/n)"
#   # usr_response = gets.chomp
