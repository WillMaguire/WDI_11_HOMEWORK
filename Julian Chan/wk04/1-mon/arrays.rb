# 1. Create an array of the days of the week
days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# 2. My calendar says the first day is Sunday...
days_of_the_week = days_of_the_week.rotate(-1)

# 3. Create a new array of the days of the week:
days_of_the_week = [days_of_the_week.slice!(1, 5), days_of_the_week.reverse]

# 4. Remove either the weekdays or the weekends
days_of_the_week.pop

# 5. Sort the remaining days alphabetically
days_of_the_week[0] = days_of_the_week[0].sort
