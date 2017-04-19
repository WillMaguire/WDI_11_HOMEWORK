Question 1
days_of_the_week = Array["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]

Question 2
days_of_the_week.unshift(days_of_the_week.pop)

Question 3
new_days_of_the_week = []
first_inner_array = days_of_the_week.slice(0,5)
second_inner_array = days_of_the_week.slice(5,6)
new_days_of_the_week = first_inner_array.concat(second_inner_array)

Question 4
second_inner_array.clear

Question 5
first_inner_array.sort
