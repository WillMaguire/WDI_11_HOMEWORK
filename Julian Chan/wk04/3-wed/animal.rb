class Animal
  attr_reader :name

  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def to_s
    "#{ @name }, #{ @age } y/o, #{ @gender }, #{ @species }, toys: #{ @toys.join(", ") }"
  end
end
