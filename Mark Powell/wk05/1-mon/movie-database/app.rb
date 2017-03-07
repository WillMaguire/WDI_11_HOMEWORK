require "pry"
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do

  erb :index

end


get '/about' do
  movie_title = params[:movie_title]
  @result = HTTParty.get('http://omdbapi.com/?t='+movie_title)
  erb :about
end
# binding.pry
