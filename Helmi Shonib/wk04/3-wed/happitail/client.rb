require 'pry'

  class Client

    def initialize (name, children, age, pets_list)
      @name = name
      @children = children
      @age = age
      @pets_list = []
    end


    def pets
      @pets_list << pets
    end
  # def get_name
  #   @name
  # end
  #
  # def set_name(name)
  #   @name = name
  # end
  #
  # def children
  #   @children = children
  # end
  #
  # def pets
  #   @pets_list << pets
  # end


  binding.pry
  end
