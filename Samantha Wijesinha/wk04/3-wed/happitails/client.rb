# Client:
#
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.


class Clients
  attr_accessor :c_name, :c_children, :c_age, :c_pets

  def initialize(c_name, c_children, c_age)

    #scope wider than local

    @c_name = c_name
    @c_children = c_children
    @c_age = c_age
    @c_pets = []


  end

  def add_pets(pet)
    @c_pets = @c_pets.push(pet)
  end

end
