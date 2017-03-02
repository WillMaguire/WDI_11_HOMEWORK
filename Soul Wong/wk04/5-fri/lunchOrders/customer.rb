class customer
  attr_accessor :custom_name, :food_orders
  def initialize(name,order)
    @customer_name = name
    @food_orders = order
  end
end
