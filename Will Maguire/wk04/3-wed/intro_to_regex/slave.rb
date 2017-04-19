require 'pry'

class Slave

  attr_accessor :slave_name, :slave_age, :slave_gender, :slave_species, :slave_toys

  # def slave_name
  #   @slave_name
  # end
  #
  # def slave_name=(name)
  #   @slave_name = name
  # end
  #attr_reader -- read only
  #attr_writer -- write only
  #slave_name = gets "Enter slave name"
  #  slave_age = gets "Enter slave age"
  #  slave_gender = gets "Enter slave gender"
  #  slave_species = gets "Enter slave species"
  #attr to parse iuser input to value
  def initialize(slave_name, slave_age, slave_gender, slave_species)
        #it will auto-run when you make a Slave
    #source of this variable
    #increase the scope
    #instance variable
    @slave_name = slave_name
    @slave_age = slave_age
    @slave_gender = slave_gender
    @slave_species = slave_species
    @slave_toys = []

  end
end
