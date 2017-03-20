require "pry"
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require_relative 'database_config'
require_relative 'models/movie'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @movies = Movie.all
  erb :index
end

get '/list' do
  movie = params[:movie]
  @movielist = HTTParty.get('http://omdbapi.com/?s='+movie)

  erb :list
end

get '/about' do
  title = params[:movie]
  # @result = HTTParty.get('http://omdbapi.com/?t='+title)
  @movie = Movie.find(title: title)
  erb :about
end
# binding.pry
