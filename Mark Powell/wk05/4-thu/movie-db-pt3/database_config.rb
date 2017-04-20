require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie_db'
}

# ApplicationRecord.establish_connection(options)
ActiveRecord::Base.establish_connection(options)
