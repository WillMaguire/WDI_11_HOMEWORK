require 'pry'

class Shelter
  def initialize()
    @clients = []
    @animals = []
  end

  def shelter_clients
    @clients
  end

  def shelter_animals
    @animals
  end

  def add_client (new_client)
    @clients.push(new_client)
  end

  def add_pet (new_pet)
    @animals.push(new_pet)
  end

  def adopt_pet (client_name, pet_name)
    client_pets = @clients.find{|num| num.name == client_name}.pets
    pet_found = @animals.find {|pet| pet.name == pet_name}
    client_pets.push(pet_found)
    @animals.delete(pet_found)
    print "#{client_name} has adopted #{pet_name}\n"
  end

  def give_pet (client_name, pet_name)
    client_pets = @clients.find{|num| num.name == client_name}.pets
    pet_found = client_pets.find {|pet| pet.name == pet_name}
    @animals.push(pet_found)
    client_pets.delete(pet_found)
    print "#{client_name} has got rid of #{pet_name}\n"
  end

  def list_clients
    puts "====Client List===="
    for client in @clients
      puts "Name: #{client.name}"
      puts "Number of Children: #{client.children}"
      puts "Age: #{client.age}"
      puts "Pets: #{client.pets.join(", ")}"
      puts "==================="
    end
  end

  def list_pets
    puts "====Pet List===="
    for animal in @animals
      puts "Name: #{animal.name}"
      puts "Age: #{animal.age}"
      puts "Gender: #{animal.gender}"
      puts "Toys: #{animal.toys.join(", ")}"
      puts "================"
    end
  end
end
