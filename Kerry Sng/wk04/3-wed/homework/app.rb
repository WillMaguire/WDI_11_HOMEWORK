# Phase 1
# Can create animals and clients
# Phase 2
# New animals and clients can be added to the shelter
# Phase 3
# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4
# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process


require 'pry'

require_relative 'animal.rb'
require_relative 'client.rb'
require_relative 'shelter.rb'

animals = []
leo = Animal.new('Leo', 8, 'male', 'dog')
tom = Animal.new('Tom', 5, 'male', 'cat')
button = Animal.new('Button', 3, 'female', 'dog')

clients = []
john_smith = Client.new('John Smith', 1, 30)
ann_lee = Client.new('Ann Lee', 2, 35)
jon_jones = Client.new('Jon Jones', 0, 25)


binding.pry
