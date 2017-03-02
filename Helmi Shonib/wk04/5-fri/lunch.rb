require 'pry'


class Lunch

attr_accessor :name, :item, :order

def initialize (new_name, new_item, order)

  @name = new_name
  @item = new_item
  @order = []

end

def add_item
@order << add_item
end

puts "Name for order: "
name = gets.chomp
puts = "What would you like to order?"
item = gets.chomp
puts "#{name} wants to order: #{item}"

end

binding.pry
