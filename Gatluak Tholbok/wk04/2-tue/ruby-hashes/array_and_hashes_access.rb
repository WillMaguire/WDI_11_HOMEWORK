
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

h[1]
h[:two]
h["two"]
h[:four] = 4
h[3] = 'Three'

is = {true => "It's true!", false => "It's false"}
1. It's true
2. It's false
3. It false



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

7. users.each do |key, value|
      puts value[:favorite_numbers]
    end

8. users.each do |key, value|
      puts value[:favorite_numbers].sort
  end
