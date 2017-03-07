require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'



get '/' do

  erb :index
end


get '/about' do
  title = params[:search]
  @result = HTTParty.get('http://omdbapi.com/?t='+title)

  erb :about
end

get '/search_result' do
  movie = params[:search]
  @search_result = HTTParty.get('http://omdbapi.com/?s='+movie)

  erb :search_result
end
