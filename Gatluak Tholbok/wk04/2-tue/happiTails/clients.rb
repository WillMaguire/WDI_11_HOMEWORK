class Clients
  attr_accessor :client, :age, :children, :pets
  
  def initialize(client, age, children, pets)
    @client = client
    @age = age
    @children = children
    @pets = pets
  end
end
