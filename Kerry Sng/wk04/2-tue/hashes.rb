a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?

puts a[1].to_s

a.insert(3, 'kerry')


h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
# How would you return the string "Two"?
# How would you return the number 2?
# How would you add {3 => "Three"} to the hash?
# How would you add {:four => 4} to the hash?

h[1].to_s

:two.to_s

h[two]

h[3] = 'Three'

h[:four] = 4

is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
# What is the return value of is["Erik" == "Jonathan"]?
# What is the return value of is[9 > 10]?
# What is the return value of is[0]?
# What is the return value of is["Erik"]?

Its true
It's false
It's false
nil
Erik

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
# How would you add the number 7 to Erik's favorite numbers?
# How would you add yourself to the users hash?
# How would you return the array of Erik's favorite numbers?
# How would you return the smallest of Erik's favorite numbers?
# How would you return an array of Anil's favorite numbers that are also even?
# How would you return an array of the favorite numbers common to all users?
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

users['Jonathan'][:twitter]
users['Jonathan'][:favorite_numbers] = 12,42,75,7
users['Erik'][:favorite_numbers]
users['Erik'][:favorite_numbers].min
users['Anil'][:favorite_numbers % 2 == 0]
users[:favorite_numbers]
