
require 'pry'


class Order

  attr_accessor :name , :orders

def initialize (name)
  @name = name
  @orders =  []
end

  def get_orders (order)
    @orders << order
  end

end






# binding.pry
