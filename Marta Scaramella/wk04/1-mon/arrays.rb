
#1
days_of_the_week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

#2
# days_of_the_week.insert(0, days_of_the_week[days_of_the_week.length-1]).pop()

days_of_the_week.unshift(days_of_the_week.pop)

#3
days_of_the_week_2 = days_of_the_week_2.push(days_of_the_week[0]).push(days_of_the_week[6])

days_of_the_week_2 = days_of_the_week_2[5,2]

days_of_the_week_2 = days_of_the_week_2.sort
