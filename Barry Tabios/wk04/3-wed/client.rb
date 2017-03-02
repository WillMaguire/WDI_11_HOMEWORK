require 'pry'




class Client

  @no_of_customers = 0

  attr_accessor :name, :number_of_children, :age, :pets_array

  def initialize(name, number_of_children, age)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets_array = []
    @pet_counter = 0
  end

  def pets()

    puts 'Do you have pet(s) - Y/N'

    while (input = gets().chomp) != 'N' do

      puts 'Enter pets name'
      name = gets().chomp()

      puts 'Enter pets age'
      age = gets().to_i()

      puts 'Enter pets gender'
      gender = gets().chomp()

      puts 'Enter pets species'
      species = gets().chomp()

      @pets_array[@pet_counter] = Animal.new(name, age, gender, species)

      puts "Enter favourite toy(s)"

      while (toy = gets().chomp()) != '' do
        @pets_array[@pet_counter].animal_toys(toy)
        puts "Enter additional toy(s), otherwise leave blank to exit"
      end

      @pet_counter += 1

      puts 'Do you have pet(s) - Y/N'
    end
  end

  def shelter()
    puts "Client Name: #{@name}"
    puts "No. of Children: #{@number_of_children}"
    puts "Age: #{@age}"
  end

end
