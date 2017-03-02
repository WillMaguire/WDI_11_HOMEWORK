require "pry"

class Client
  attr_accessor :name, :children_number, :age, :pets

  def initialize (name, children_number, age)
    @name = name
    @children_number = children_number
    @age = age
    @pets = []
  end

  def info
    "Client:#{@name} is #{@age} years old with #{@children_number} children. He/she has already #{@pets.join (',')}"
  end

  def add_a_pet (pet)
    pets << pet
  end

end
