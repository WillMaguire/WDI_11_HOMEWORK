require "pry"

class Client
  attr_accessor :name, :children_number, :age, :pets

  def initialize (name, children_number, age)
    @name = name
    @children_number = children_number
    @age = age
    @pets = []
  end

  def client_info
    "Client name:#{@name}, age: #{@age}, number of children: #{@children_number}, other pets: #{@pets.join (',')}"
  end

  def add_a_pet (pet)
    pets << pet
  end

end
