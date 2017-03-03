require 'pry'

# require_relative 'happiTails.rb'
require_relative 'clients.rb'
require_relative 'animals.rb'

puts 'clients or animals"'

userInput = gets

if userInput == 'clients'
  shelter[:clients]
elsif userInput == 'animals'
  shelter[:animals].push(Animals.new())
else

end

family_one = Clients.new('James', 42, 3, 1)
cody_dog = Animals.new('cody', 5, 'female', 'dog')


shelter = {
  animals: [cody_dog],
  clients: [family_one]
}

# to display animals and clients

shelter[:animals]
shelter[:clients]

# to add new clients and animals

rogue_cat = shelter[:animals].push(Animals.new('rogue', 1, 'male', 'cat'))
david_johns = shelter[:clients].push(Clients.new('David', 23, 0, 0))

# client can adopt an animal and put an animal for adoption
