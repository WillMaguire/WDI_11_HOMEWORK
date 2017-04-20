require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  @title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?t=#{ @title }")
  erb :about
end

get '/searched' do
  @titles = []
  @searched = params[:searched]
  @result_list = HTTParty.get("http://omdbapi.com/?s=#{ @searched }")
  # binding.pry
  @result_list["Search"].each do |movie|
    @titles << movie["Title"]
  end
  if @titles.length == 1
    redirect "/about?title=#{@searched}"
  else
    erb :searched
  end
end
