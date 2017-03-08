require "pry"
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

post '/about' do
  movie = params[:movie]
  @result = HTTParty.get('http://omdbapi.com/?t='+movie)
  erb :about
end
# binding.pry
