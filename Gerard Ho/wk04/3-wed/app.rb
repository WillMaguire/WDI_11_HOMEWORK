require 'pry'
require_relative "animal"
require_relative "client"
require_relative "shelter"
shelter = Shelter.new


def new_animal
  print "Name: "
  name = gets.chomp
  print "Age: "
  age = gets.chomp
  print "Gender: "
  gender = gets.chomp
  print "Specie: "
  specie = gets.chomp
  print "Toys: "
  toys = gets.chomp.split(", ")

  return Animals.new(name, age, gender, specie, toys)
end

def new_client
  print "Name: "
  name = gets.chomp
  print "Children: "
  children = gets.chomp.to_i
  print "Age: "
  age = gets.chomp.to_i
  print "Pets: "
  pets = gets.chomp.split(", ")

  return Client.new(name, children, age, pets)
end
#TEST ELEMENTS ADDED TO FILL THE EMPTY ARRAYS WITH DATA TO TEST
shelter.add_client(Client.new('Gerard',0,28,[]))
shelter.add_client(Client.new('Tony',3,45,[]))
shelter.add_client(Client.new('Michael',2,35,[]))

shelter.add_pet(Animals.new('Woofy',1,'Male','doggy',['bones']))
shelter.add_pet(Animals.new('Meowy',2,'Female','kitty',['baby log']))
shelter.add_pet(Animals.new('Rattata',1,'Male','rat',['cheesies']))

loop do
  puts "Enter in the number you want to access"
  puts "1. Display all animals"
  puts "2. Display all clients"
  puts "3. Create as animal"
  puts "4. Create a client"
  puts "5. Facilitate client adopts an animal"
  puts "6. Facilitate client puts an animal up for adoption"
  puts "7. Exit"

  user_action = gets.chomp.to_i

  if user_action == 1
    shelter.list_pets
  elsif user_action == 2
    shelter.list_clients
  elsif user_action == 3
    shelter.add_pet(new_animal)
  elsif user_action == 4
    shelter.add_client(new_client)
  elsif user_action == 5
    print "Client Name: "
    client = gets.chomp
    print "Pet Name to adopt: "
    pet = gets.chomp
    shelter.adopt_pet(client,pet)
  elsif user_action == 6
    print "Client Name: "
    client = gets.chomp
    print "Pet Name to adopt: "
    pet = gets.chomp
    shelter.give_pet(client,pet)
  elsif user_action == 7
    break
  end
end
