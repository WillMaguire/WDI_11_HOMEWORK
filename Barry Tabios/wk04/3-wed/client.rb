require 'pry'




class Client

  @no_of_customers = 0
  attr_accessor :name, :number_of_children, :age, :pets_array

  def initialize(name, number_of_children, age)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets_array = []
  end

  def pets(pet)
    @pets_array << pet
  end

  def shelter()
    puts "Client Name: #{@name}"
    puts "No. of Childeren: #{@number_of_children}"
    puts "Age: #{@age}"
    puts "Pets: #{@pets_array}"
  end

end
