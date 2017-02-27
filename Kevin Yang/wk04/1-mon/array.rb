puts "connected to pry"

day_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

# # Part1
# day_of_the_week.pop
# new_calendar = day_of_the_week.unshift("Sunday")

# puts day_of_the_week

#Part2 & 3 &4
weekdays = day_of_the_week.each_slice(4).to_a[0]
part_4 = weekdays.sort

puts part_4
