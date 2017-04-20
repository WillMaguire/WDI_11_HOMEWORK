Question A.

require 'pry'

a = ["Anil", "Erik", "Jonathan"]

puts a[1]
a.push("Helmi")

Question B.

h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2}

"#{h[1]}" or h.values[1]
h[:two]
h["two"]
h2 = {3 => "Three"} ; h.merge(h2)
{:four => 4}.merge(h)

Question C.

is = {
  true => "It's true!",
  false => "It's false"}

  1. true
  2. false
  3. false
  4. [0]
  5. ["Erik"]

  Question D.

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
2. users["Erik"][:favorite_numbers].push 7
3. users["Helmi"]={:twitter => "helminems", :favorite_numbers=>[7, 10, 17]}
4. users["Erik"][:favorite_numbers]
5. users["Erik"][:favorite_numbers].min
6. users["Anil"][:favorite_numbers].select do |num|
    num %2 == 0
    end
7.  a = users["Jonathan"][:favorite_numbers]
    b = users["Erik"][:favorite_numbers]
    c = users["Anil"][:favorite_numbers]

    common_number = a & b & c

8.  a = users["Jonathan"][:favorite_numbers]
    b = users["Erik"][:favorite_numbers]
    c = users["Anil"][:favorite_numbers]

    all_fave_numbers = a + b + c
    all_fave_numbers.sort.uniq



binding.pry
