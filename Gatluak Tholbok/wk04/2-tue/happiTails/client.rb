class Client
  attr_accessor :client, :age, :children, :pets

  def client_info(client, age, children, pets)
    @client = client
    @age = age
    @children = children
    @pets = pets
  end
end
