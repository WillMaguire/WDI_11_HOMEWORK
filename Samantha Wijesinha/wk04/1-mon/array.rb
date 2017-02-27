require 'pry'

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


#
# Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.rotate(-1)
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
days_of_the_week = Array.new(2) {Array.new(5) {}}
days_of_the_week[0].push("Monday", "Tuesday", "Wednesday", "Thursday", "Friday").compact!
days_of_the_week[1].push("Saturday", "Sunday").compact!
# 4. Remove either the weekdays or the weekends

list.reject! {|item| item.name =~ /Saturday|Sunday/i }
days_of_the_week.delete('Saturday')
days_of_the_week.delete('Sunday')
# 5. Sort the remaining days alphabetically
days_of_the_week[0].sort
days_of_the_week[1].sort
