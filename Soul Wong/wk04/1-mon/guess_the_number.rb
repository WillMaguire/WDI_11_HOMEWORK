puts "Please provide the max number"
user_max = gets.chomp.to_i
random_number = rand(1..user_max)
puts "Please enter your guess number"
user_number = gets.chomp.to_i

	while user_number != random_number
		if user_number > random_number
			puts "Wrong, guess lower!"
		else
			puts "Wrong, guess higher!"
		user_number = gets.chomp.to_i
		puts "Please try again"
	end
	
puts "Congratulations!"
end