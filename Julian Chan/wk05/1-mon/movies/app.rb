require 'httparty'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/about' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")
  erb :about
end
