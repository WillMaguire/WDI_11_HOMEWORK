require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'

class Shelter

  def initialize (shelter, animal = [], client = [])
  end

  def shelter
    shelter = []
  end

  def get_animal
    @shelter << animal
  end

  def get_client
    @shelter << client
  end



binding.pry
end
  a1 = Animal.new('Geoffrey', 10, 'Male','Girraffe', 'toys')
