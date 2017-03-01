# Array and Hashes Access

############## A ##############

a = ["Anil", "Erik", "Jonathan"]

#### 1 - The return of 'Erik' ####
  erik = a[1]
  #puts erik

#### 2 - The return of 'Erik' ####
  a.push("Mark")
  #puts a


############## B ##############

h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}

# 1.
h[1]

# 2.
h[:two]

# 3.
h["two"]

# 4.
h[3] = "Three"

# 5.
h[:four] = 4

############## C ##############

is = {
  true => "It's true!",
  false => "It's false"
}
# 1. "It's true!"
# 2. "It's false"
# 3. "It's false"
# 4. " " ( Nothing )
# 5. " " ( Nothing )

############## D ##############
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

# 1. puts users["Jonathan"][:twitter]
# 2. puts users["Jonathan"][:favorite_numbers].push(7)
# 3. puts users["Mark"] = {}
# 4. puts users["Erik"][:favorite_numbers]
# 5. puts users["Erik"][:favorite_numbers].sort.first
# 6.
=begin
  even_numbers = []
  users["Anil"][:favorite_numbers].map do |number|
    if number.even?
      even_numbers.push(number)
    end
  end

# 7.
  common_numbers = []
  users["Anil"][:favorite_numbers].map do |number|
    if ( users["Erik"][:favorite_numbers] && users["Jonathan"][:favorite_numbers] ).include?(number)
      common_numbers.push(number)
    end
  end
  puts common_numbers
=end

# 8.
 # favorite_numbers = [ [users["Anil"][:favorite_numbers]], [users["Erik"][:favorite_numbers]],[users["Jonathan"][:favorite_numbers]] ]
 # favorite_numbers = favorite_numbers.flatten.uniq.sort
 # puts favorite_numbers
