# require 'pry'

# A. Return string "Erik" and add "Gatluak" from and to the array
#
# a = ["Anil", "Erik", "Jonathan"]
# a.delete_at(1).push('Gatluak')

# delete_at() deletes and return Erick
# can also delete
# use shift to remove an item from the beginning of an array
# use pop to remove the last element in the array

# adding elements:
# push use to push an element into an array
# unshift used to add an element to the beginning of an array
# insert use to add an element anywhere in the array

# B. Return "One", return "Two", return "2", add {3 => "Three"} to the hash {:four => 4} to the hash

# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#
# h[1] # returns "One"
# h[:two] # returns "Two"
# h["two"] # returns 2
# h[:four] = 4 # adds :four => 4
# h[3] = 'Three' # adds 3 => 'Three'

# # C. return value of is[2+2 == 4], is["Erik" == "Jonathan"],
#
# is = {true => "It's true!", false => "It's false"}
# 1. It's true
# 2. It's false
# 3. It's false
# 4. nil
# 5. nil

# D. Access Users twitter accounts

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

1. users["Jonathan"][:twitter]
2. users["Erik"][:favorite_numbers].push(7)
3. users["Gatluak"] = {}
4. users["Erik"][:favorite_numbers]
5. users["Erik"][:favorite_numbers].min
6. users["Anil"][:favorite_numbers].select do |num|
  num.even?
end
7.
8. struggled with these the last two questions and was wondering if you can help or give me a hint

# users.each_key {  returns all keys in the hash: returns both twitter and favorite_numbers
#   :favorite_numbers
# }

# users.each_key do |key, val|
#   puts "#{:favorite_numbers}"
# end

# users.each_value do |val|
#   puts "#{:favorite_numbers}"
# end
#
# users.select {|:favorite_numbers|}
