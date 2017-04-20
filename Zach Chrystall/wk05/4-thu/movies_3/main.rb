require 'pry'
require "active_record"
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'database_config'
require_relative 'models/movie'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  erb :index
end

get '/about' do
  @title = params[:title]
  # if Movie.title == @title
  #
  # else
  #
  # end
  @result = Movie.new
  binding.pry
  @result.title = "Jaws 2"
  @result.actors = "bill, ben"
  @result.director = "nifdshhsd"
  @result.save
  binding.pry
  # @result = HTTParty.get("http://omdbapi.com/?t=#{ @title }")
  erb :about
end

get '/searched' do
  @titles = []
  @searched = params[:searched]
  @result_list = HTTParty.get("http://omdbapi.com/?s=#{ @searched }")
  @result_list["Search"].each do |movie|
    @titles << movie["Title"]
  end
  if @titles.length == 1
    redirect "/about?title=#{@searched}"
  else
    erb :searched
  end
end
