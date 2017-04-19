require 'pry'
require_relative 'client.rb'
require_relative 'animal.rb'
require_relative 'shelter.rb'

c1 = Client.new("John", 30 , 3 , 2)
c2 = Client.new("Sandy", 35 , 1 ,2)

a1 = Animal.new('Max',7 ,'M','Dog')
a1.get_toys("Rollar , Ball")

a2 = Animal.new('Buddy', 5 , 'F' , 'Cat' )
a2.get_toys("Box , Tunnel")

shelter = {
  :animals => {},
  :clients => {}

}
new_animal = ''
def add_Animals

  puts "Please enter following details to register animal to  center.
  Please enter name, age, gender, species and toys of an animal seperated each by enter"

  a_name = gets
  a_age = gets.to_i
  a_gender = gets
  a_species = gets
  toys = gets

new_animals = Animal.new(a_name , a_age , a_gender , a_species)
new_animals.get_toys(toys)

shelter[:animals][a_name]{:age => a_age , :gender => a_gender , :species => a_species}

# :toys =>

end
add_Animals

puts "\n\n   Welcome to HappiTails Animal Shelter\n
    *** Menu ***
1. Display all animals
2. Display all clients
3. Add new Animal
4. Add new client
5. Adopt an animal
6. Put an animal up for adoptaion (only for exiting clients)
7. Exit \n\n"

puts "Please choose one of the service from above (1 to 7)"


# while (option = gets.to_i) != 7
#
#   puts case option
#   when 1
#
#   when 2
#
#   when 3
#
#
#   when 4
#
#   when 5
#
#   when 6
#
#   else
#     "Please choose valid option"
#   end
# end

puts "Good bye!!"

# shelter {
#   animals {tony {}}
#   clients {}
# }


# shelter['Animals'][Animal]

    #  animal_id = Animal.new(name, age, gender, species)




binding.pry
