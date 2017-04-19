require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
movie = params[:movie]
result = HTTParty.get("http://omdbapi.com/?t=#{movie}")
@title = result["Title"]
@image = result["Poster"]
@items = result
erb :about
end
