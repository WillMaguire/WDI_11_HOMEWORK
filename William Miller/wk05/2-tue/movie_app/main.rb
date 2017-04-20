
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
# require 'pry'

get '/' do
  erb :index
end

get '/movie' do
  @title = params[:title]
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{ @title }")
  erb :movie
end

get '/list' do
  @titles = []
  @searched = params[:searched]
  @result_list = HTTParty.get("http://omdbapi.com/?s=#{ @searched }")
  @result_list["Search"].each do |movie|
    @titles << movie["Title"]
  end
  if @titles.length == 1
    redirect "/movie?title=#{@searched}"
  else
    erb :list
  end
end
