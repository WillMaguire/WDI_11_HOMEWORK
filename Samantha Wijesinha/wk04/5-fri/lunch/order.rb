class Order
  attr_accessor :name, :order, :add_order


  def initialize(name, order)

    #scope wider than local

    @name = name
    @order = []


  end


  def add_order(add_order)
    @additional_item = @order.push(add_order)

  end

  def order_print
    
      puts "#{name} can order a #{order}, and then add #{add_order} to his order later."
  end


end
