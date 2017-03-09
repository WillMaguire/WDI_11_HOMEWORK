require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie_database'
}

ActiveRecord::Base.establish_connection(options)
