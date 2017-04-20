require 'pry'

#A1
a[1]
#A2
a.push('Alfons')

#B1
h.values[1]
#B2
h.values[2]
#B3
h.values[3]
#B4
h[3] = "Three"
#B4
h[:four] = 4

#C1
"It's true!"
#C2
"It's false"
#C3
"It's false"
#C4
nil
#C5
nil

#D1
users['Jonathan'][:twitter]
#D2
users['Erik'][:favorite_numbers].push(7)
#D3
new_arr = {}
new_arr[:twitter] = "ClinkBlink"
new_arr[:favorite_numbers] = [7,12,87]
users['Alfons'] = new_arr
#D4
users["Erik"][:favorite_numbers]
#D5
users["Erik"][:favorite_numbers].min
#D6
users["Anil"][:favorite_numbers].select do |num|
  num.even?
end
#D7
users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Alfons"][:favorite_numbers]

#D8
all_users_favourite_number = []
 (all_users_favourite_number << users["Jonathan"][:favorite_numbers] << users["Erik"][:favorite_numbers] << users["Anil"][:favorite_numbers] << users["Alfons"][:favorite_numbers]).flatten!.sort.uniq
