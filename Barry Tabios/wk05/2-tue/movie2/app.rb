require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end


get '/search' do
  @result = HTTParty.get("http://omdbapi.com/?s=#{params[:input_search]}")
  erb :search
end

get '/about' do
  film = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")
  @poster = film["Poster"]
  @title = film["Title"]
  @year = film["Year"]
  @rate = film["Rated"]
  @runtime = film["Runtime"]
  @genre = film["Genre"]
  @director = film["Director"]
  @writer = film["Writer"]
  @actors = film["Actors"]
  @plot = film["Plot"]
  @language = film["Language"]
  @country = film["Country"]
  erb :about
end
