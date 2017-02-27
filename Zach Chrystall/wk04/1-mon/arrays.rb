require 'fileutils'
require 'pry'


days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

days_of_the_week.unshift(days_of_the_week.pop)

split_week = [days_of_the_week[1..5],[days_of_the_week[0], days_of_the_week[6]]]

split_week.pop

split_week[0].sort
