class Client
  attr_accessor :name, :children, :age, :pets
  def initialize(name, number_of_children, age, pets)
    @name = name
    @children = number_of_children
    @age = age
    @pets = pets
  end
end
