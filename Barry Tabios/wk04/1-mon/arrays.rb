# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically

require 'fileutils' # standard libary
require 'pry' # because I need the debugging methods

# 1. Create an array of the days of the week

# days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
# days_of_the_week = 'mon tue wed thurs fri sat sun'.split(' ')
days_of_the_week = %w(mon tue wed thurs fri sat sun) # different usee

# binding.pry // for testing

# 2.  2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

puts(days_of_the_week.rotate(-1)) # below are different ways to do it
# last_day = days_of_the_week.pop
# days_of_the_week.unshift(days_of_the_week.pop)


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

array = Array.new # or you can use array = []

array1 = days_of_the_week.rotate(5).drop(2)
array2 = days_of_the_week.drop(5)

array.push(array1)
array.push(array2)

# array = [array1, array2]

puts array

# days_of_the_week = [%w[mon tue wed thurs fri], %w[sat sun]]
# days_of_the_week = [%w(mon tue wed thurs fri), %w(sat sun)]





# 4. Remove either the weekdays or the weekends
# Your choice..

puts(days_of_the_week.drop(5)) # output  ["Saturday", "Sunday"]

#5. Sort the remaining days alphabetically

remove_weekends = days_of_the_week.rotate(5).drop(2) # you can use negative index example = .drop(-2)
puts(remove_weekends.sort!) # sorts in alphabetical order

# use .flatten to remove multiple level. arr - [[1,2],[3]]
# use .flatten output is [1,2,3]
# put days_of_the_week.flatten.sort.join(', ')
