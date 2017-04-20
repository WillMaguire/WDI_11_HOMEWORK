require "pry"
require_relative "animal"
require_relative "client"

sue = Animal.new('Sue',3,'Female','Labrador',['Balls','Bones'])
spike = Animal.new('Spike',3,'Male','St Bernard',['Balls','Bones'])

client1 = Client.new('Gerard Butler', 3, 39, [Animal.new('Bernard',4,'Male','Bald Eagle',['Squeaky Mouse','Drones']),Animal.new('Snowy',2,'Female','Rabbit',['Carrot Toy','Rubber Ball'])])
client2 = Client.new('Anita Diaz', 0, 25, [Animal.new('Crocks',3,'Male','Saltwater Crocodile',['Mannequin'])])

@animals = []
@clients = []

@animals.push(sue)
@animals.push(spike)

@clients.push(client1)
@clients.push(client2)

def animals_list(animals)
  index = 0
  puts "------------------Pets-------------------"
  while index != animals.length do
    puts "Name: #{animals[index].name}"
    puts "Age: #{animals[index].age}"
    puts "Gender: #{animals[index].gender}"
    puts "Species: #{animals[index].species}"
    puts "Toys: #{animals[index].toys}"
    puts "------------------------------------------"
    index = index + 1
  end
end

def clients_list
  index = 0
  puts "------------------Clients-------------------"
  while index != @clients.length do
    puts "Name: #{@clients[index].name}"
    puts "Children: #{@clients[index].children}"
    puts "Age: #{@clients[index].age}"
    animals_list(@clients[index].pets)
    puts "------------------------------------------"
    index = index + 1
  end
end

def add_animal
  puts "Please enter animal's name"
  new_animal_name = gets.chomp.to_s
  puts "Please enter animal's age"
  new_animal_age = gets.chomp.to_i
  puts "Please enter animal's gender"
  new_gender = gets.chomp.to_s
  puts "Please enter animal's species"
  new_species = gets.chomp.to_s
  puts "Animal's has toy/s?(y/n)"
  usr_response = gets.chomp
  animal_toys = []
  while usr_response == 'y'
    puts 'Please enter animal toy'
    toy = gets.chomp
    animal_toys.push(toy)
    puts 'Animal has more toy?(y/n)'
    usr_response = gets.chomp
  end
  return Animal.new(new_animal_name, new_animal_age, new_gender, new_species, animal_toys)
end

def add_client
  puts "Please enter client's name"
  new_client_name = gets.chomp.to_s
  puts "Please enter client's number of children"
  new_children= gets.chomp.to_i
  puts "Please enter client's age"
  new_client_age = gets.chomp.to_i
  puts "Client has pet/s?(y/n)"
  usr_response = gets.chomp
  client_pets = []
  while usr_response == 'y'
    client_pets.push(add_animal())
    puts 'Client has more pets?(y/n)'
    usr_response = gets.chomp
  end
  return Client.new(new_client_name, new_children, new_client_age, client_pets)
end

def adopt_animal
  puts "Please enter client's name"
  client_name = gets.chomp.to_s
  puts "Please enter animal name"
  animal_name = gets.chomp.to_s
  client_adopting = @clients.find {|x| x.name == client_name }
  animal_adopted = @animals.find{ |y| y.name == animal_name }
  client_adopting.pets.push(animal_adopted)
  @animals.delete_if{ |h| h.name == animal_name }
end

def advertised_animal
  puts "Please enter client's name"
  client_name = gets.chomp.to_s
  puts "Please enter animal name"
  animal_name = gets.chomp.to_s
  client_owner = @clients.find {|x| x.name == client_name }
  animal_adopted = client_owner.pets.find{ |y| y.name == animal_name }
  @animals.push(animal_adopted)
  client_owner.pets.delete_if{ |h| h.name == animal_name }
end

n = 0
while n != 7

  puts "Choose Option :
  1. Display all animals
  2. Display all clients
  3. Add animal
  4. Add client
  5. Adopt Animal
  6. Put animal for adoption
  7. Exit
  "

n = gets.chomp.to_i

  case n
    when 1
      animals_list(@animals)
    when 2
      clients_list
    when 3
      @animals.push(add_animal)
    when 4
      @clients.push(add_client)
    when 5
      adopt_animal
    when 6
      advertised_animal
  end
end
