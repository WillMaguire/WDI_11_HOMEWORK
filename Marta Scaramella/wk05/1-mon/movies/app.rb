require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/movie_list' do
  result = HTTParty.get('http://omdbapi.com/?s=' + params['s'])
  # @title = array_result['Title']
  movies = result['Search']
  @all_movies = []
  movies.each do |movie|
    @all_movies_titles << movie['Title']
  end

  erb :movie_list
end

get '/movie' do
  # t = params['s']
  # address = 'http://omdbapi.com/?t=' + params['t']
  # list_result = HTTParty.get(address)
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
# HTTParty.get('http://omdbapi.com/?s=jaws')
# HTTParty.get('http://omdbapi.com/?s=jaws')['Search'][0]['Title']
