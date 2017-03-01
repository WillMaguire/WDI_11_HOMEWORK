require 'pry'

require_relative 'animal.rb'
require_relative 'client.rb'


animal_array = []
client_array = []

animal_array.push(Animals.new("barney", 2, "male", "dog"))
animal_array.push(Animals.new("Mr Whiskers", 10, "male", "cat"))
animal_array[0].a_toys.push("ball")
animal_array[1].a_toys.push("rubber chicken")


client_array.push(Clients.new("Barry Jones", 2, 55))
client_array[0].c_pets.push("barney","gerald")


client_array.push(Clients.new("Celia Swinton", 0, 30))
client_array[1].c_pets.push("Mr Whiskers")



  # The shelter should display all the clients.
  # The shelter should display all the animals.
animal_array.each do |(a,b)|
  puts "Animal List: #{a} #{b}"
end

client_array.each do |(x,y)|
  puts "Animal List: #{x} #{y}"
end


binding.pry
