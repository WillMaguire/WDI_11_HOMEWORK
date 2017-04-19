a = ["Anil", "Erik", "Jonathan"]

#A
res1 = a[1]

res2 = a.push("Marta")

#B
h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}

#1
h[1]

#2
h[:two]

#3
h['two']

#4 {3 => "Three"}
h = h.merge(3 => "Three")

#5
h = h.merge(:four => 4)

#C
is = {
  true => "It's true!",
  false => "It's false"
}

#1
"It's true!"

#2
"It's false"

#3
"It's false"

#4
nil

#5
nil

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

#1 Jonathan's Twitter handle (i.e. the string "tronathan")
users["Jonathan"][:twitter]

#2 add the number 7 to Erik's favorite numbers?
users["Jonathan"][:favorite_numbers].push(7)

#3 add yourself to the users hash
# users = users.merge ("Marta" => {
#   :twitter => "scara",
#   :favorite_numbers => [3, 11, 17]
#   })

#4 array of Erik's favorite numbers
users["Erik"][:favorite_numbers]

#5 smallest of Erik's favorite numb
users["Erik"][:favorite_numbers].min

#6 array of Anil's favorite numbers that are also even
users["Anil"][:favorite_numbers].select {|x| x.even? }

#7 favorite numbers common to all users
users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]

#8  array containing all users' favorite numbers, sorted, and excluding duplicates
# users.each do |key, val|
#   num_arrays += [key][:favorite_numbers]
# end
