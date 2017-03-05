require 'pry'

require_relative 'client.rb'

require_relative 'animal.rb'


shelterAnimal =[]
shelterClient =[]



shelterAnimal << Animal.new('lollipop','3','male','Jack Russells', '2', "no")
shelterClient << Client.new('dt', '2', '35')
shelterClient << Client.new('kasun', '1', '35')
shelterAnimal << Animal.new('nougat','2','female','American Bobtail', '5', "no")

def menu (text)
puts "**Welcome to HappiTails  BETA **"

puts "#{text}\n" unless text.empty?

 puts '1 - display all animals'
 puts '2 - display all clients'
 puts '3 - add a client'
 puts '4 - add an animal'
 puts '5 - facilitate client adopts an animal'
 puts '6 - facilitate client puts an animal up for adoption'
 puts "q : Quit\n\n"
 print '>> '
 gets.chomp
end

text = ""
choice = menu (text)


while text != 'q'
  text = ""

  case choice
    when "1"
      (0..shelterClient.length).each do |i|
        nameList = shelterClient[i].instance_variable_get(:@name)
        puts nameList
      end

    when "2"
      (0..shelterAnimal.length).each do |i|
        nameList = shelterAnimal[i].instance_variable_get(:@name)
        puts nameList
      end

    when "3"
      puts "What is the name of the client"
        clientName = gets.chomp.downcase
      puts "How old is the client"
        clientAge = gets.chomp
      puts "How many children does your client have?"
        clientChildren = gets.chomp

      puts "Client #{clientName}"" has been added"
      clientName = Client.new(clientName, clientAge, clientChildren)

    when "4"
        puts "What is the name of the animal"
        aniName = gets.chomp.downcase
        puts "How old is #{aniName}?"
        aniAge = gets.chomp
        puts "What is #{aniName} a male or a female?"
        aniGender = gets.chomp
        puts "What about species?"
        aniSpecies = gets.chomp
        puts "How many toys does the animal have?"
        puts = "Animal #{aniName} has been added"
        toyNum = gets.chomp
        shelterAnimal << Animal.new(aniName, aniAge, aniGender, aniSpecies, toyNum, "no")

    when "5"
      puts "What is the name of the client?"
        cName = gets.chomp.downcase
      puts "Who does she/he want to adopt?"
        aName = gets.chomp.downcase
binding.pry
      (0..(shelterClient.length + shelterAnimal.length)).each do |i,n|
        if cName == shelterClient[i].instance_variable_get(:@name) && aName == shelterAnimal[n].instance_variable_get(:@name) && shelterAnimal[n].instance_variable_get(:@relationship) == "no"
          shelterClient[i].instance_variable_get(:@pets).push(aName)
          shelterAnimal[n].instance_variable_set(:@relationship, "yes")
          text += " #{aName} has been adopted by #{cName}"
        elsif cName == shelterClient[i].instance_variable_get(:@name) && shelterAnimal[n].instance_variable_get(:@relationship) == "yes"
          puts "#{aName} is already owned"
        end
      end

    when "6"
      puts "What is the name of the client?"
        cName = gets.chomp.downcase
      puts "What the name of his pet he wants to put up for adoption?"
        aName = gets.chomp.downcase

      (0..shelterClient.length + shelterAnimal.length).each do |i,n|
        if cName == shelterClient[i].instance_variable_get(:@name) && aName == shelterAnimal[n].instance_variable_get(:@name) && shelterAnimal[n].instance_variable_get(:@relationship) == "yes"
          shelterClient[i].instance_variable_get(:@pets).delete(aName)
          shelterAnimal[n].instance_variable_set(:@relationship, "no")
          text += " #{aName} has been put up for adoption from #{cName}"
        elsif shelterAnimal[n].instance_variable_get(:@relationship) == "yes"
          puts "#{aName} is already owned"
        else
          puts "ERROR404"
        end
      end

    else
    exit

  end

choice = menu text
end
