require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/movie_list' do
  result = HTTParty.get('http://omdbapi.com/?s=' + params['film'])
  @movies = result['Search']
  erb :movie_list
end

get '/movie/:name' do
  result = HTTParty.get("http://omdbapi.com/?t="+"#{params[:name]}")
  # result = HTTParty.get('http://omdbapi.com/?t=' + params['film'])

  @title = result['Title']
  @year = result['Year']
  @genre = result ['Genre']
  @actors = result['Actors']
  @plot = result['Plot']
  @country = result['Country']
  @awards = result['Awards']
  @director = result['Director']
  @poster = result['Poster']
  erb :movie
end

# binding.pry
#TEST
# result = HTTParty.get('http://omdbapi.com/?s=jaws');
# movies = HTTParty.get('http://omdbapi.com/?s=jaws')['Search'];
