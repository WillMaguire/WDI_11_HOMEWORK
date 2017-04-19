require 'pry'

      class Animal
      attr_accessor :name, :age, :gender, :species, :multiple_toys

      def initialize(new_name, new_age, new_gender, new_species, multiple_toys)
        @name = new_name
        @age = new_age
        @gender = new_gender
        @species = new_species
        @multiple_toys = []
      end


      def get_toys (toys)
        @multiple_toys << toys
      end

  a1 = Animal.new('Geoffrey', 10, 'Male','Girraffe', 'toys')
      # def set_species(new_species)
      #   @species = new_species
      # end
      #
      # def set_name(new_name)
      #   @name = new_name
      # end

      # def get_name
      #   return @name
      # end
      #
      # def get_species
      #   return @species
      # end







      binding.pry


end
