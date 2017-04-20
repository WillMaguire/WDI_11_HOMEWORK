require 'pry'
class Transaction
  attr_accessor :order_id, :customer_name, :order
  def initialize(id,name,order_details)
    @order_id = id
    @customer_name = name
    @order = order_details
  end

  def order_extra(order_details)
    order_details.each do |food|
      @order << food
    end
  end

  def order_remove_food(food)
    #consider listening index number in food listing so
    #easier and faster to delete
    food.each do |food_item|
      if @order.include?(food_item)
        @order.delete(food_item)
        return "#{food_item} has been removed from the order"
      else
        return "No such food to delete"
      end
    end
  end
end
