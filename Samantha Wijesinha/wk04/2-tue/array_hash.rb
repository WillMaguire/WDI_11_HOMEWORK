require 'pry'

a = ["Anil", "Erik", "Jonathan"]

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "Erik"?
a[1]

# How would you add your name to the array
a.push('Samantha')

# How would you return the string "One"?
h[1]
# How would you return the string "Two"?
h[:two]
# How would you return the number 2?
h['two']
# How would you add {3 => "Three"} to the hash?
h[3] = 'Three'
# How would you add {:four => 4} to the hash?
h[:four] = 4


is = {true => "It's true!", false => "It's false"}




# What is the return value of is[2 + 2 == 4]?
is[2 + 2 == 4]

  # "It's true!"
# What is the return value of is["Erik" == "Jonathan"]?
is["Erik" == "Jonathan"]
  # "It's false"
# What is the return value of is[9 > 10]?
is[9 > 10]
  # "It's false"
# What is the return value of is[0]?
is[0]
  # nil
# What is the return value of is["Erik"]?
is["Erik"]
# nil



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
    :favorite_numbers => [12, 14, 7],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
# How would you add yourself to the users hash?
users["Samantha"] = {
 :twitter => "ctrl_alt_del",
 :favorite_numbers => [5],
 }


# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
anil_fav = users["Anil"][:favorite_numbers]

anil_fav.each do  |x|
  if x % 2 == 0
    puts x
  end
end


# How would you return an array of the favorite numbers common to all users?
erik_fav = users["Erik"][:favorite_numbers]
jon_fav = users["Jonathan"][:favorite_numbers]
concat_arr = anil_fav.concat erik_fav
fave_numbers = concat_arr.concat jon_fav


common_numbers= fave_numbers.select{|element| fave_numbers.count(element) > 1 }
result = common_numbers.uniq
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
fave_numbers.sort.uniq


binding.pry
