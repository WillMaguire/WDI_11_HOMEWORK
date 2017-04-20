require 'pry'

#A
a = ["Anil", "Erik", "Jonathan"]

puts a[1]

a.push "Kevin"

#B

h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2}

# SOLUTIONS
# puts h[1]
# puts h[:two]
# puts h["two"]

h[:four] = 4

#C
is = {true => "It's true!", false => "It's false"}

#Ans
#1."It's true!"
#2 "It's false"
#3 "It's false"
#4 nil
#5 nil


#D
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

#1
users["Jonathan"][:twitter]

#2
users["Erik"][:favorite_numbers].push(7)

#3
users["Kevin"] = {
  :twitter => "kukaheadla",
  :favorite_numbers => [8]
}

#4
users["Erik"][:favorite_numbers]

#5
users["Erik"][:favorite_numbers].min

#6
users["Anil"][:favorite_numbers].each { |value| puts value if value.to_f%2==0}

#7
users["Anil"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]

#8
total_favs = users["Anil"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Jonathan"][:favorite_numbers]
total_favs.uniq.sort
binding.pry
