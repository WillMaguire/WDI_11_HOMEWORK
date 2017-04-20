require 'pry'

# Client:
#
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.

class Client
  attr_accessor :name, :age, :children, :pets
  def initialize(name, age, children, pets)
    @name = name
    @age = age
    @children = children
    @pets = pets
  end

end









# binding.pry
