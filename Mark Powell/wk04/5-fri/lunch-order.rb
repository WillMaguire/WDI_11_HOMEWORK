require "pry"
  order = {}
  puts "Name for order: (enter name)"
  order[:name] = gets.chomp
  puts "#{ order[:name] } wants to order: (enter item) #{:food}"
  food = gets.chomp
  order[:food] = [food]
  puts "#{order[:name]} wants to order #{ order[:food] }"

  puts "Add another item to order? y/n"
  menu_choice = gets.chomp

  while menu_choice === "y" do
    puts "Name for order: (enter name)"
    order[:name] = gets.chomp
    puts "#{ order[:name] } wants to order: (enter item) #{:food}"
    food = gets.chomp
    order[:food] = [food]
    puts "#{order[:name]} wants to order #{ order[:food] }"

    puts "Add another item to order? y/n"
  end

# binding.pry
