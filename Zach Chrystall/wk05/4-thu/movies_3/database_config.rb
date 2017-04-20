require "active_record"

options = {
  adapter: 'postgresql',
  database: 'moviemovie'
}

ActiveRecord::Base.establish_connection(options)
