require 'pry'


a = ["Anil", "Erik", "Jonathan"]

puts a[1]
puts a.push("Zach")

################################

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

puts h[1]
puts h[:two]
puts h["two"]
h[3] = "Three"
h[:four] = 4
puts h

###############################

is = {true => "It's true!", false => "It's false"}

"It's true!"
"It's false"
"It's false"
nil
nil

################################

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

puts users["Jonathan"][:twitter]
users["Erik"][:favorite_numbers].unshift(7)

users["Zach"] = {
  :twitter => "zchryst",
  :favorite_numbers => [7, 21, 67],
}

puts users["Erik"][:favorite_numbers]
puts "------------------"

evens = users["Anil"][:favorite_numbers].select { |num| num.even? }
puts evens

fave_numbers = []
users.each do |key, val|
  fave_numbers.push(val[:favorite_numbers])
end

puts fave_numbers[0] & fave_numbers[1] & fave_numbers[2]
puts '--------------------------'

all_faves = fave_numbers.flatten.uniq.sort
puts all_faves
