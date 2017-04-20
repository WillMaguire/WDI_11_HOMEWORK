require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  movie = params[:movie]
  result = HTTParty.get("http://omdbapi.com/?t=#{movie}")
  @title = result["Title"]
  @image = result["Poster"]
  @items = result
  File.open('history.txt', 'a+') do |file|
    file.puts movie
  end
  erb :about
end

get '/list' do
  movie = params[:movie]
  result = HTTParty.get("http://omdbapi.com/?s=#{movie}")
  if result["Search"].length == 1
    redirect "/about?movie=#{movie}"
  else
    @search_word = movie.capitalize
    @movie_list = result["Search"]
    File.open('history.txt', 'a+') do |file|
      file.puts movie
    end
  end
  erb :list
end

get '/history' do
  @file = File.open('history.txt')
  erb :history
end
