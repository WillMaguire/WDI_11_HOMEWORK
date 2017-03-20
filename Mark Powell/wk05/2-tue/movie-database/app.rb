require "pry"
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/list' do
  movie = params[:movie]
  @movielist = HTTParty.get('http://omdbapi.com/?s='+movie)

  # if @movielist['totalResults'] == 1
  #     @result = HTTParty.get('http://omdbapi.com/?t='+title)
  #     redirect "/about?movie=#{movie}"
  # end
  erb :list
end

get '/about' do
  title = params[:movie]
  @result = HTTParty.get('http://omdbapi.com/?t='+title)
  erb :about
end
# binding.pry
