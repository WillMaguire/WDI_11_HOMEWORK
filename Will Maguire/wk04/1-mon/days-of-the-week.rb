


days_of_the_week = ["Monday","Tuesday","Wenesday","Thursday","Friday","Saturday","Sunday"] #part 1
#days_of_the_week = ['Monday Tuesday Wenesday Thursday Friday Saturday Sunday'].split(' ')
#days_of_the_week = %w['Monday Tuesday Wenesday Thursday Friday Saturday Sunday']
puts days_of_the_week.rotate(-1) #part 2

# .flatten()  - a method to squash multiple arrays into a single array
new_array1 = days_of_the_week.drop(-2)
puts new_array1
puts "hi will"
new_array2 = days_of_the_week.drop(5)
puts new_array2
puts "hi will"
final_array =  [new_array1 + new_array2] #part 3
puts final_array

days_of_the_week.delete(5) #part 4

sorted_array = new_array1.sort() #part 5

#was unsure if methods were to be carried out concurrently or individually; I finished them individually but can clean them up to run concurrently if required.
