require 'pry'


class Animal

  attr_accessor :name , :age , :gender , :species

  def initialize (name, age, gender, species)

    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []

  end

  def get_toys(toys)
    @toys << toys
  end

  # def to_s
  #   puts "#{name} is a #{gender} #{species},have toys: #{@toys.to_s}"
  # end

end







# binding.pry
