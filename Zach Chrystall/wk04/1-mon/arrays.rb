require 'fileutils'
require 'pry'


# days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
# days_of_the_week = 'mon tue wed thur fri sat sun'.split
days_of_the_week = %w(mon tue wed thur fri sat sun)

puts days_of_the_week
puts '--------------------------'

days_of_the_week.unshift(days_of_the_week.pop)

puts days_of_the_week
puts '--------------------------'

split_week = [days_of_the_week[1..5],[days_of_the_week[0], days_of_the_week[6]]]

puts split_week
puts '--------------------------'


split_week.pop

puts split_week
puts '--------------------------'


split_week.flatten.sort

puts split_week
puts '--------------------------'
