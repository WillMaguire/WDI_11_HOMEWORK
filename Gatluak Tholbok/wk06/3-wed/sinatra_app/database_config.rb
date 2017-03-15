require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'sinatra_app',
}

ActiveRecord::Base.establish_connection(options)
