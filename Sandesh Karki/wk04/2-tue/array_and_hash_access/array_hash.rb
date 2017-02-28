require 'pry'

# A. Given the following data structure:

a = %w(Anil Erik Jonathan)

#A1. How would you return the string `"Erik"`?
a[1].to_s

#A2. How would you add your name to the array?
a.push('Sandesh')


#B. Given the following data structure:

h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}

# B1. How would you return the string `"One"`?
h[1]

# B2. How would you return the string `"Two"`?
h[:two]

# B3. How would you return the number `2`?
h["two"]

# B4. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"

# B5. How would you add `{:four => 4}` to the hash?
h[:four] = 4


# C. Given the following data structure:

is = {true => "It's true!", false => "It's false"}

# C1. What is the return value of `is[2 + 2 == 4]`?
  #It's true!

# C2. What is the return value of `is["Erik" == "Jonathan"]`?
  #It's false!

# C3. What is the return value of `is[9 > 10]`?
  #It's false!

# C4. What is the return value of `is[0]`?
  #nil

# C5. What is the return value of `is["Erik"]`?
  #nil


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

  # D1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
  users["Jonathan"][:twitter]

  # D2. How would you add the number `7` to Erik's favorite numbers?
  users["Erik"][:favorite_numbers].push 7

  # D3. How would you add yourself to the users hash?
  users["Sandesh"]={:favorite_numbers => [1,2,3,4,12], :twitter => "karki"}

  # D4. How would you return the array of Erik's favorite numbers?
  users["Erik"][:favorite_numbers]

  # D5. How would you return the smallest of Erik's favorite numbers?
  users["Erik"][:favorite_numbers].min

  # D6. How would you return an array of Anil's favorite numbers that are also even?
  users["Anil"][:favorite_numbers].select do |num|
    num.even?
  end

  # D6. How would you return an array of the favorite numbers common to all users?

  a = users["Jonathan"][:favorite_numbers]
  b = users["Erik"][:favorite_numbers]
  c = users["Anil"][:favorite_numbers]
  d = users["Sandesh"][:favorite_numbers]

  common_number = a & b & c & d

  # D7. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

  new_array = users.keys.map do |key|
    users[key][:favorite_numbers]
  end

  new_array.flatten!.sort

  new_array.delete_if do |elem|
    elem == common_number.join().to_i
  end



# binding.pry
