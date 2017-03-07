require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
  erb :index
end

get '/movie' do
  @movie = params[:movie_search]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie}")
  erb :movie
end

# get '/' do
#   erb :index
# end
#
# get '/movie' do
#   @movie = params[:movie_search]
#   @result = HTTParty.get("http://omdbapi.com/?t=#{@movie}")
#   erb :movie
#   refresh '/'
# end
