require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



get '/' do
  erb :index
end

get '/movie' do
  @movie = params[:movie_search]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie}")
  if @result["Title"] == @movie
    erb :movie
  else
      @results = HTTParty.get("http://omdbapi.com/?s=#{@movie}")
      @result_array = []
      @results.each do |result|
      @result_array << result["Title"]
    end
      erb :search
  end
end
# get '/' do
#   erb :index
# end
#
# get '/movie' do
#   @movie = params[:movie_search]
#   @result = HTTParty.get("http://omdbapi.com/?t=#{@movie}")
#   erb :movie
#   refresh '/'
# end
