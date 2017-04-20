require 'pry'

class Pet

  attr_accessor :pet_name, :pet_age, :pet_gender, :pet_species, :pet_toys
#Below is the purpose of the attr_accessor function
  # def pet_name
  #   @pet_name
  # end
  #
  # def pet_name=(name)
  #   @pet_name = name
  # end



  #attr_reader -- read only
  #attr_writer -- write only

  #attr to parse iuser input to value
  def initialize(pet_name, pet_age, pet_gender, pet_species)
        #it will auto-run when you make a Slave
    #source of this variable
    #increase the scope
    #instance variable
    @pet_name = pet_name
    @pet_age = pet_age
    @pet_gender = pet_gender
    @pet_species = pet_species
    @pet_toys = []

  end
end
