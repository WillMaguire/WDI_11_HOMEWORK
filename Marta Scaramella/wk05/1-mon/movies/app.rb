require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/result' do
  address = 'http://omdbapi.com/?t=' + params['t']
  result = HTTParty.get(address)
  @title = result['Title']
  @year = result['Year']
  @genre = result ['Genre']
  @actors = result['Actors']
  @plot = result['Plot']
  @country = result['Country']
  @awards = result['Awards']
  @director = result['Director']
  @poster = result['Poster']
  erb :result
end

# binding.pry
