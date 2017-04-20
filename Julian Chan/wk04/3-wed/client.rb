class Client
  attr_reader :name, :pets

  def initialize(name, number_of_children, age, pets)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = pets
  end

  def adopt(animal)
    @pets << animal
  end

  def put_up_for_adoption(animal)
    @pets.delete animal
  end

  def to_s
    "#{ @name }, #{ @number_of_children } child(ren), #{ @age } y/o, pets: [#{ @pets.join("],\n[") }]"
  end
end
