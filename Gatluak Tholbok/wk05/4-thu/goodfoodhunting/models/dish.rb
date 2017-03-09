require 'pry'
require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
}

ActiveRecord::Base.establish_connection(options)

class Dish < ActiveRecord::Base
  # attr_accessor :name, :image_url
  #
  # def initialize (hash)
  #   @name = options[:name]
  #   @image_url = options [:image_url]
  # end
  #
  # def save

end

binding.pry
