# require 'pry'
class Client
  attr_accessor :name, :ChildrenNo, :age, :pets

  def initialize(name, childrenNo, age)
    @name = name
    @ChildrenNo = childrenNo
    @age = age
    @pets =[]
  end

  def addPets (unit)
    @pets << unit
  end

  def deletePets(unit)
    @pets >> unit
  end

end



# binding.pry
