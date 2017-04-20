puts "enter a value between 0 and 10"

input = gets.chomp.to_i #converts to interger

number = rand(0..10)

while input == number
  puts "Congragulations, you are correct"

  if input > number
    puts "Wrong! Guess lower"
  elsif input < number
    puts "Wrong! Guess higher"
  end


days_of_the_week = ["Monday" ,"Tuesday" ,"Wednesday" ,"Thursday", "Friday", "Saturday" ,"Sunday"]

rotated = days_of_the_week.rotate -1


seperate_week = [rotated[1..5], [rotated[0], rotated[6]]]
 puts seperate_week

seperate_week.pop
puts seperate_week

seperate_week.flatten.sort
puts seperate_week



cohort = {
  name: 'fullslack',
  age: 4,
  likes: 'css'
}

#access name => cohort[:name]
