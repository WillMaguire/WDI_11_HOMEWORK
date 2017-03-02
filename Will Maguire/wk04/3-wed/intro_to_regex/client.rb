require 'pry'

class Client

  attr_accessor :name, :number_of_children, :age, :client_pets
  def initilize(client_name, client_children, client_age)


  @name = client_name
  @number_of_children = client_children
  @age = client_age
  @client_pets = []

   end
end
