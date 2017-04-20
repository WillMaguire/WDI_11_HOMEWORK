class Orders
  attr_accessor :name, :order

  def initialize name
    @name = name
    @order = []
  end

  def placed_orders orders
    @order << orders
  end

  def display_orders
    puts "Customer: #{@name}"
    puts "Orders: #{@order.join(',')}"
  end
end
