require 'pry'

collectiveArr = []
lunchArr = []

class LunchPair
  attr_accessor :name, :orderList

  # def name
  #   return @name
  # end
  #
  # def name=(value)
  #   @name = value
  # end

  def initialize (name, orderList)
    @name = name
    @orderList = orderList
  end

end

test1 = LunchPair.new('Kasun', ['latte','sandwich'])
test1.name = 'DT'
collectiveArr << test1

puts " **welcome to lunch order app BETA**"


print '>> Name for order:'
orderName = gets.chomp.capitalize

print ">> #{orderName} wants to order:"
lunchOrder = gets.chomp
lunchArr << lunchOrder

puts "\n *** Add another item to the order? (y/n) ***"
repeatMarker =  gets.chomp


while repeatMarker == "y"
  print ">> #{orderName} wants to order:"
  lunchOrder = gets.chomp
  lunchArr << lunchOrder

  puts "\n*** Add another item to the order? (y/n) ***"
  repeatMarker =  gets.chomp
end

puts "\n>> All orders: #{lunchArr.join(', ')}"
collectiveArr << LunchPair.new(orderName, lunchArr)
lunchArr = []



binding.pry
