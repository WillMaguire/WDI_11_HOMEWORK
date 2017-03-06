require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'


get '/' do
  erb :index
end




# result = HTTParty.get('http://omdbapi.com/?t=once')
