require 'pry'
require_relative 'client.rb'
require_relative 'animal.rb'

#Shelter

shelter = {
  animals: [],
  clients: []
}

# Main Menu
def user_input
  	puts "Welcome to Happitails adoption center"
  	puts ("\nMain Menu\n")
  	puts "Press 1: Show available animals"
  	puts "Press 2: Show all clients"
  	puts "Press 3: Add a new animal"
  	puts "Press 4: Add a new client"
  	puts "Press 6: Make an adoption"
  	puts "Press 7: Put an animal up for adoption"
  	puts "Press 0: Exit"

  	user_input = gets.chomp.to_i

end


#METHOD FOR DISPLAYING ANIMALS
def display_animals
    if shelter[:animals].empty? #question mark indicates that the method returns a booleen value
      puts ("We currently don\'t have any animals up for adoption")
    else
        shelter[:animals].each do |animal|
          puts ("#{animal.name.to_s}")
          puts "\tAge: #{animal.age}"
          puts "\tGender: #{animal.gender.to_s}"
          puts "\tSpecies: #{animal.species.to_s}"
          if animal.toys == []
            puts "\tToys: 0"
          else
            puts "\tToys: #{animal.toys.to_s}"
          end
    end
end

#METHOD FOR DISPLAYING CLIENTS
def display_clients
    if shelter[:clients].empty?
      puts ("The shelter currently doesn\'t have any clients. Return to the main menu and add some")
    else
        shelter[:clients].each do |client|
          puts ("#{client.name.to_s}")
          puts "\tAge: #{client.age}"
          puts "\tGender: #{client.gender.to_s}"
          puts "\tNumber of Children: #{client.num_children.length}"
          if client.num_pets == []
            puts "\tPets: 0"
          else
            puts "\tPets #{client.num_pets.to_s}"
          end
    end
end


#METHOD FOR ADDING NEW ANIMAL
def add_new_animal
	puts "Complete to add a new animal."
	print "What is the animal\'s name? "
	name = gets.chomp
	print "How old is #{name}? "
	age = gets.to_i
	print "Is #{name}\'s male or female?"
	gender = gets.chomp
	print "What species is #{name}? "
	species = gets.chomp

	new_animal = Animal.new name, age, gender, species
	new_animal << shelter[:animals]
end

#METHOD FOR ADDING NEW CLIENT
def add_new_client
  new_client = Client.new name, num_children, age
end

#METHOD FOR CLIENT NEW ADOPTION

def client_new_adoption
# adds a new pet into the clients pet array
# ammount of pets is equal to array length of @num_pets
end

#METHOD FOR CLIENT PUTTING UP FOR ADOPTION

def up_for_adoption
  #pushes a new pet

end

menu_selection = user_input

if menu_selection == 1
		display_animals
	elsif menu_selection == 2
		display_clients
	elsif menu_selection == 3
		shelter[:animals].to_a.push.add_new_animal
		puts ("\nYou have just added a new animal!")
	elsif menu_selection == 4
		shelter[:clients].to_a.push.add_new_client
		puts ("\nYou have just added a new client!")
	elsif menu_selection == 6
		client_new_adoption
	elsif menu_selection == 7
		up_for_adoption
	else
		puts ("Error, please enter a number from 1-7")
end

end

end

binding.pry
