class Client
  attr_accessor(:name , :number_of_children, :age )
  def initialize(name, number_of_children, age)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = []
  end
end
