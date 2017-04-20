require_relative 'animal'
require_relative 'client'

def create_animal_from_string(string)
  array = string.split(",").map(&:strip)
  array = array[0..3] + [array[4..-1]]
  Animal.new(*array)
end

def create_client_from_string(string)
  array = string.split(",").map(&:strip) + [[]]
  Client.new(*array)
end

def find_object_by_name(array, name)
  array.find { |obj| obj.name.downcase == name.downcase }
end

# animals
duchess = Animal.new("Duchess", 3, "female", "dog", ["ball"])
garfield = Animal.new("Garfield", 5, "male", "cat", ["pizza", "lasagna"])
spike = Animal.new("Spike", 7, "male", "dog", ["rubber bone", "frisbee"])
tom = Animal.new("Tom", 2, "male", "cat", ["string", "rubber mouse"])

# clients
muriel = Client.new("Muriel", 3, 30, [duchess, tom])

happitails = { clients: [muriel], animals: [spike, garfield] }

menu_options = [
  { text: "Display all animals",
    action: lambda { happitails[:animals] } },
  { text: "Display all clients",
    action: lambda { happitails[:clients] } },
  { text: "Add an animal",
    action: lambda {
      puts "Enter the name, age, gender, species, toys"
      new_animal = create_animal_from_string(gets.chomp)
      happitails[:animals] << new_animal
      "#{ new_animal.name } was added."
    } },
  { text: "Add a client",
    action: lambda {
      puts "Enter the name, number of children, age"
      new_client = create_client_from_string(gets.chomp)
      happitails[:clients] << new_client
      "#{ new_client.name } was added."
    } },
  { text: "Let client adopt an animal",
    action: lambda {
      puts "Enter client name, pet name"
      response = gets.chomp.split(",").map(&:strip)
      client = find_object_by_name(happitails[:clients], response[0])
      animal = find_object_by_name(happitails[:animals], response[1])

      if client == nil || animal == nil
        "Client or animal not found"
      else
        client.adopt(happitails[:animals].delete(animal))
        "#{ client.name } adopted #{ animal.name }"
      end
    } },
  { text: "Let client put an animal up for adoption",
    action: lambda {
      puts "Enter client name, pet name"
      response = gets.chomp.split(",").map(&:strip)
      client = find_object_by_name(happitails[:clients], response[0])
      animal = find_object_by_name(client.pets, response[1])

      if client == nil || animal == nil
        "Client or animal not found"
      else
        happitails[:animals] << client.put_up_for_adoption(animal)
        "#{ client.name } put #{ animal.name } up for adoption"
      end
    } },
  { text: "Quit" }
]

puts "Welcome to HappiTails"
puts
puts "What do you want to do?"

loop do
  menu_options.map.each_with_index { |o, i| puts "(#{ i + 1 }) #{ o[:text] }" }
  response = gets.chomp.to_i
  break if response - 1 == menu_options.index { |opt| opt[:text] == "Quit" }
  puts menu_options[response - 1][:action].call
  puts
end
