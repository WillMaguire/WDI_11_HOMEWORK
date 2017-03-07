require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/movie_list' do
  result = HTTParty.get('http://omdbapi.com/?s=' + params['s'])
  @movies = result['Search']
  erb :movie_list
end

get '/movie' do
  # t = params['s']
  address = 'http://omdbapi.com/?t=' + params['t']
  list_result = HTTParty.get(address)
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
#TEST
# result = HTTParty.get('http://omdbapi.com/?s=jaws');
# movies = HTTParty.get('http://omdbapi.com/?s=jaws')['Search'];
