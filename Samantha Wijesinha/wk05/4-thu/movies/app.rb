require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require 'pg'
require_relative 'database_config'
require_relative 'models/movies'




get '/' do

  erb :index
end


get '/about' do
  title = params[:search]
  @result = HTTParty.get('http://omdbapi.com/?t='+title)

  erb :about
end

get '/search_result' do
  movie = params[:search]
  @search_result = HTTParty.get('http://omdbapi.com/?s='+movie)

  @search_result["Search"].each do |result|

    Movie1 = Movie.new
    Movie1.Title = "<%= result['Title'] %>"
    Movie1.Plot = "<%= result['Plot'] %>"
    Movie1.Year = "<%= result['Year'] %>"
    Movie1.RunTime = "<%= result['RunTime'] %>"
    Movie1.save
  end
  erb :search_result
end
