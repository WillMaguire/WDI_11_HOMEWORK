require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'



get '/' do

  erb :index
end


post '/about' do
  title = params[:search]

  @result = HTTParty.get('http://omdbapi.com/?t='+title)

  erb :about
end
