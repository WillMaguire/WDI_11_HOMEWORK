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
binding.pry
end
