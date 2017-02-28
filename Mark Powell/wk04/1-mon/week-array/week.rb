require "pry"

# ############# 1 & 2 #############
#
# days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
# # Remove last item in Array and save it to a variable for later use
# week_start = days_of_the_week.pop
# # Add variable to first index in Array
# days_of_the_week.unshift(week_start)
# In one line: days_of_the_week.unshift( days_of_the_week.pop )
# # Show it off
# puts days_of_the_week
#
############# 3 #############

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]

# days_of_the_week ´%w(mon tue wed thur fri sat sun)
# %w tells ruby that some words are coming and to put them into an array

# Create array from the last 2 elements in days_of_the_week
weekend = days_of_the_week.slice!(-2..-1)

# Create array from the remaining elements in days_of_the_week
weekdays = days_of_the_week.slice!(0..-1)

# Add weeks days as first element in days_of_the_week array [0]
days_of_the_week.unshift(weekdays)

# Push the weekend array as the last element in days_of_the_week array [1]
days_of_the_week.push(weekend)

#### ALternatively
days_of_the_week = [ %w(mon tue wed thur fri), %W(sat sun) ]

############# 4 #############

# Remove the weekend array
days_of_the_week.pop

############# 5 #############
# sort the remaining weekdays in the array
puts days_of_the_week.flatten.sort
