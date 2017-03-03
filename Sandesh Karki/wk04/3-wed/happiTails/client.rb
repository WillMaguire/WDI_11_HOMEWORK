
require 'pry'

class Client

  attr_accessor :name , :age , :children , :pets

  def initialize (name , age , children , pets)

    @name = name
    @age = age
    @children = children
    @pets = pets

  end

  # def to_s
  #   puts "#{name.capitalize} is a #{age} year-old who has #{children} child(ren) and #{pets} animal(s)."

  # end

end






# binding.pry
