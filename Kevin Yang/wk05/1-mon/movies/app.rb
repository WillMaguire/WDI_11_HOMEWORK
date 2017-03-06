require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  @title = ''
  @year = ''
  @rated = ''
  @released =''
  @runtime = ''
  @genre = ''
  @director = ''
  @writer = ''
  @actors = ''
  @plot = ''
  @language = ''
  @country = ''
  @awards = ''
  @poster = ''
  @metascore = ''
  @imdbRating = ''

  erb :index

end

get '/t' do
  result = HTTParty.get("http://omdbapi.com/?t=#{params[:film]}")
  @title = result["Title"]
  @year = result["Year"]
  @rated = result["Rated"]
  @released = result["Released"]
  @runtime = result["Runtime"]
  @genre = result["Genre"]
  @director = result["Director"]
  @writer = result["Writer"]
  @actors = result["Actors"]
  @plot = result["Plot"]
  @language = result["Language"]
  @country = result["Country"]
  @awards = result["Awards"]
  @poster = result["Poster"]
  @metascore = result["Metascore"]
  @imdbRating = result["imdbRating"]

  erb :index
end

get '/about' do
  erb :about

end
