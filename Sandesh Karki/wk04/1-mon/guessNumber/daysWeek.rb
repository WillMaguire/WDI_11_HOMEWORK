
days_of_the_week =  ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]

#1

first_day = days_of_the_week.unshift(days_of_the_week.delete('Sunday'))

puts "Q1: #{first_day}"

#2

days_and_weekends  = [];
days_and_weekends.push(days_of_the_week.slice(1,5))
days_and_weekends.push(days_of_the_week.slice(0,1))
days_and_weekends[1][1] = days_of_the_week[6]

puts "Q2: #{days_and_weekends}"

#3
days_and_weekends[1].clear
puts "Q3: #{days_and_weekends}"

#4
puts "Q4: #{days_and_weekends[0].sort}"
