require 'pry'

# a = ["Anil", "Erik", "Jonathan"]
# # How would you return the string "Erik"?
# # How would you add your name to the array?
#
# a[1] #1
# a.push("will") #2
#
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
# How would you return the string "Two"?
# How would you return the number 2?
# How would you add {3 => "Three"} to the hash?
# How would you add {:four => 4} to the hash?
# #
# h[1] #3
#
# h[:two] #4
# h["two"] #5
# h.merge({3 => "Three"}) #6
# h.merge({:four => 4}) #7
#
# C. Given the following data structure:
#
# is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# "It's true!" #8
# # What is the return value of is["Erik" == "Jonathan"]?
# "It's false"
# # What is the return value of is[9 > 10]?
# "It's false"
# # What is the return value of is[0]?
# "It's true!"
# # What is the return value of is["Erik"]?
# "It's true!"

# D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
# users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
#users["Erik"][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
#users['will'] = {}
# How would you return the array of Erik's favorite numbers?
#users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
#users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
# even_number_array = Array.new(users["Anil"][:favorite_numbers].each { |value| if value.to_f%2==0})
# How would you return an array of the favorite numbers common to all users?
#with a function I'm too tired to write... using if statements and creating a new array to push the common numbers to
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
#as above but using .sort and .uniq
binding.pry
