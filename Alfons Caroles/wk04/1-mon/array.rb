#1
days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

#2
movedDay = days_of_the_week.pop
days_of_the_week.unshift(movedDay)

#3
new_days_of_the_week = []
weekdays = days_of_the_week[1..-2]
weekends = []

weekends.push(days_of_the_week.last)
weekends.push(days_of_the_week.first)
new_days_of_the_week.push(weekdays)
new_days_of_the_week.push(weekends)

#4 delete weekends
new_days_of_the_week.delete_at(1);

#5
new_days_of_the_week[0].sort
