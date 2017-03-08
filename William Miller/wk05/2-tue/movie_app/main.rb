
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/movie' do
  movie_title = params[:title]
  @result = HTTParty.get('http://www.omdbapi.com/?t=' + movie_title)
  #@movie
  erb :movie
end

get '/list' do
  movie_title = params[:title]
  @result = HTTParty.get('http://omdbapi.com/?t=' + movie_title)
  @list = result["search"]
  if @list.length == 1 #if there is only one movie that meatches
    redirect to "/movie?title=#{@movie_title}"
  
    erb :list
  end
end
