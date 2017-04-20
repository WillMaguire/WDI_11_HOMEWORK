require 'pry'
require_relative 'pet.rb'
require_relative 'client.rb'



  # client1 = Client.new()

def create_pet

  puts "enter pet name"
    pet_name = gets()
  puts "enter pet age"
    pet_age = gets()
  puts "enter pet gender"
    pet_gender = gets()
  puts "enter pet species"
    pet_species = gets()
  puts "enter pet toys"
    pet_toys = gets()

  pet1 = Pet.new(pet_name, pet_age, pet_gender, pet_species)

create_pet

end
end
pets = []
def add_to_pets do |pet1|
  pets.push(pet1)
end
  add_to_pets

# def create_client
#     puts "enter client name"
#       :name = gets()
#     puts "how many children does the client have?"
#       :number_of_children = gets()
#     puts "how old is the client?"
#       :age = gets()
#     puts "how many slaves does the client own?"
#       :client_slaves = gets()
#
# end
