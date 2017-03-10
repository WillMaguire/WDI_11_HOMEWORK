require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :index
end

get '/movie' do
  @results = HTTParty.get("http://www.omdbapi.com/?t=Batman&page=2")
  erb :movie
end
