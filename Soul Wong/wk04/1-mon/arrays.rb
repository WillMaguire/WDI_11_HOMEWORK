days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
removed_day = days_of_the_week.pop 
days_of_the_week.unshift(removed_day)
puts days_of_the_week

new_week_days = []
new_weekends = []
new_calendar = []

7.times do |day|
	if day >= 5
		new_weekends.push(days_of_the_week[day])
	else 
		new_week_days.push(days_of_the_week[day])
	end
end

new_calendar.push(new_week_days)
new_calendar.push(new_weekends)
new_calendar.pop 
new_calendar.sort!
