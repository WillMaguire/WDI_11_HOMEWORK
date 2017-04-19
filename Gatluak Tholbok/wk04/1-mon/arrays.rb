
# adding items to array: use .push():
# adding a value to the begining of an array: use .unshift():
# removings Items: use .pop(): removes the last item in an array and returns the value of that item.
#.shift(): removes the last item
# .reverse(): reverses an array
# .sort(): sorts an array alphabetically and .sort!() sorts an array permanently

require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days_of_the_week.unshift(days_of_the_week.pop)

new_array =

# days_of_the_week = 'mon tue wed thur'.split(' ')
# %w is used to create an array
# sort_by sorts arrays alphabetically
# .flatten cocats an array in one
# rotate: rotates the array


# creating a nested array:

new_arr = days_of_the_week.rotate(-2).drop(2)
new_arr2 = days_of_the_week.drop(5)
finish_arr = [new_arr, new_arr2]


# days_of_the_week = %w(mon tue wed thurs fri sat sun)
#
# last_day = days_of_the_week.pop
# days_of_the_week.unshift(days_of_the_week.pop)
#
# days_of_the_week = [%w(mon tue wed thurs fri),%w(sat sun)]
#
# days_of_the_week.pop
#
# days_of_the_week.flatten
# puts days_of_the_week.flatten.sort.join(', ')
# binding.pry
