require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require_relative 'database_config'
require_relative 'models/movies'

def search_db name
  found = Movie.all.find{|movie| movie.title == name}
  return found
end

get '/' do
  erb :index
end

get '/about' do
  movie_title = params[:movie]
  db_found = Movie.all.find{|movie| movie.title == movie_title}
  File.open('history.txt', 'a+') do |file|
    file.puts movie_title
  end
  # return db_found.actors
  if (db_found != nil)
    @found = db_found.attributes
    @image = db_found[:poster]
  else
    result = HTTParty.get("http://omdbapi.com/?t=#{movie_title}")
    # binding.pry
    @found = result
    @image = result['Poster']

    input = Movie.new
    input.title = @found['Title']
    input.year = @found['Year']
    input.rated = @found['Rated']
    input.released = @found['Released']
    input.runtime = @found['Runtime']
    input.genre = @found['Genre']
    input.director = @found['Director']
    input.writer = @found['Writer']
    input.actors = @found['Actors']
    input.plot = @found['Plot']
    input.language = @found['Language']
    input.country = @found['Country']
    input.awards = @found['Awards']
    input.poster = @found['Poster']
    input.metascore = @found['Metascore']
    input.imdbrating = @found['imdbRating']
    input.imdbvotes = @found['imdbVotes']
    input.imdbid = @found['imdbID']
    input.something = @found['Type']
    input.response = @found['Response']
    input.save
  end
  # return input
  # binding.pry
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
