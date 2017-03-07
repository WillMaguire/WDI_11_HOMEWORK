require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end


get '/search' do
  @result = HTTParty.get("http://omdbapi.com/?s=#{params[:input_search]}")
  binding.pry
  erb :search
end

get '/about' do
  result = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")
  binding.pry
  @poster = result["Poster"]
  @title = result["Title"]
  @year = result["Year"]
  @rate = result["Rated"]
  @runtime = result["Runtime"]
  @genre = result["Genre"]
  @director = result["Director"]
  @writer = result["Writer"]
  @actors = result["Actors"]
  @plot = result["Plot"]
  @language = result["Language"]
  @country = result["Country"]
  erb :about
end
