require 'pry'

class Lunch

  attr_accessor :name, :items

  def initialize (name)
    @name = name
    @items = []
  end

  def get_items (order)
    @items << order
  end

end
