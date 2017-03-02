require_relative 'Animal.rb'
require_relative 'Client.rb'
require 'pry'
require 'colorize'

human1 = Client.new("Steve Carol",4,45,[])
human2 = Client.new("Carol",2,445,[])
chicken = Animal.new("Evil Chicken",99,"N/A","Mystical",["Boxing Glove","Fake Feed"])
chicken2 = Animal.new("Flying Nimbus",99,"Male","Mystical",["Kamehama"])
chicken3 = Animal.new("Larry o Brien Trophy",23,"N/A","Starbury",["Basketball Rim"])
animalShelter = {
	:clientList => [human1,human2],
	:animalList => [chicken,chicken2,chicken3]
}

def add_client(animalShelter)
	puts "Client Name"
	clientName = gets
	puts "Client Age"
	clientAge = gets
	puts "Number of Children"
	clientChild = gets
	puts "Client Pets"
	clientPets = gets
	newClient = Client.new(clientName,clientChild.to_i,clientAge.to_i,clientPets.split(","))
	animalShelter[:clientList] << newClient
end

def add_animal(animalShelter)
	puts "Animal Name"
	animalName = gets
	puts "Animal Age"
	animalAge = gets
	puts "Animal Gender"
	animalGender = gets
	puts "Animal Species"
	animalSpecies = gets
	puts "Animal Toys"
	animalToys = gets
	newAnimal = Animal.new(animalName,animalAge.to_i,animalGender,animalSpecies,animalToys.split(","))
	animalShelter[:animalList] << newAnimal
end

def adopt_animal(animalShelter,adopt_option)
	clientName = gets
	petName = gets
	if 	animalShelter[:clientList].any?{ |client| client.name== clientName }
		if animalShelter[:animalList].any?{ |animal| animal.name== petName }
			find_client = animalShelter[:clientList].find { |client| client.name== clientName }
			case adopt_option
			when "adopt"
				find_client.pets << animalShelter[:animalList].delete(petName)
				return "Successful Adoption! #{petName} now belongs to #{clientName}"
			when "give_up"
				animalShelter[:animalList] << find_client.pets.delete(petName)
				return " #{petName} is now homeless :( "
			end
		else
			puts "No Such Pet exists!"
		end
	else
		puts "No Such Owner Name!"
	end
end

def pet_listing(animalShelter)
	animalShelter[:animalList].each do |animal|
		puts (animal.name).red
	end
end

def client_listing(animalShelter)
	animalShelter[:clientList].each do |client|
		puts (client.name).red
	end
end

loop do
puts "Welcome to the Animal House! Please choose an option"
puts "1 ~ Display List of Pets ~ ".green
puts "2 ~ Display List of Clients ~ ".green
puts "3 ~ Add Animal to Pet List ~ ".green
puts "4 ~ Add Client ~ ".light_blue
puts "5 ~ Adopt a Pet for Client ~ ".light_blue
puts "6 ~ Give up a Pet for Adoption :( ~".red
puts "7 ~ Quit Program ~ ".red
menu_choice = gets.to_i
case menu_choice
when 1
	pet_listing(animalShelter)
when 2
	client_listing(animalShelter)
when 3
	add_animal(animalShelter)
when 4
	add_client(animalShelter)
when 5
	adopt_animal(animalShelter,"adopt")
when 6
	adopt_animal(animalShelter,"give_up")
when 7
	puts " ~ Thank you and Good Bye ~ ".light_blue
else
	puts " Invalid Selection! ".red
end
break if menu_choice == 7
end

binding.pry
