require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  if( params[:movie_name].nil? )
    erb :index
  else
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_name]}")

  erb :index
end
end
