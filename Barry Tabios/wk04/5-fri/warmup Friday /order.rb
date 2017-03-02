class LunchOrder

  attr_accessor :name, :order

  def initialize (name)
    @name = name
    @order = []
  end

  def order (customer_order)
    @order << customer_order
  end

  def printout ()
    puts "Customer Name: #{@name}"
    puts "Order: #{@order.join(",")}"
  end
end
