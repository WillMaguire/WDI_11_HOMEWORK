class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def animal_info (name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = get_toys
  end

  def get_toys(new_toy)
    @toys << new_toy
  end
end
