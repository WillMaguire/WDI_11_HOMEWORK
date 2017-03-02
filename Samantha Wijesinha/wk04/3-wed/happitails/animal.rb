# Animal:
# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.


class Animals
  attr_accessor :a_name, :a_age, :a_gender, :a_species, :a_toys

  def initialize(a_name, a_age, a_gender, a_species)

    #scope wider than local

    @a_name = a_name
    @a_age = a_age
    @a_gender = a_gender
    @a_species = a_species
    @a_toys = []

  end

  def add_toy(toy)
    @a_toys = @a_toys.push(toy)
  end

end
