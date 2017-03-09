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
    @title = db_found.title
    @image = db_found.poster
    @year = db_found.year
    @rated = db_found.rated
    @release = db_found.released
    @runtime = db_found.runtime
    @genre = db_found.genre
    @director = db_found.director
    @writer = db_found.writer
    @actors = db_found.actors
    @plot = db_found.plot
    @language = db_found.language
    @country = db_found.country
    @awards = db_found.awards
    @metascore = db_found.metascore
    @imdbrating = db_found.imdbrating
    @imdbvotes = db_found.imdbvotes
  else
    result = HTTParty.get("http://omdbapi.com/?t=#{movie_title}")
    @items = result
    @title = result["Title"]
    @image = result["Poster"]
    @year = result["Year"]
    @rated = result["Rated"]
    @release = result["Released"]
    @runtime = result["Runtime"]
    @genre = result["Genre"]
    @director = result["Director"]
    @writer = result["Writer"]
    @actors = result["Actors"]
    @plot = result["Plot"]
    @language = result["Language"]
    @country = result["Country"]
    @awards = result["Awards"]
    @metascore = result["Metascore"]
    @imdbrating = result["imdbRating"]
    @imdbvotes = result["imdbVotes"]

    input = Movie.new
    input.title = @items['Title']
    input.year = @items['Year']
    input.rated = @items['Rated']
    input.released = @items['Released']
    input.runtime = @items['Runtime']
    input.genre = @items['Genre']
    input.director = @items['Director']
    input.writer = @items['Writer']
    input.actors = @items['Actors']
    input.plot = @items['Plot']
    input.language = @items['Language']
    input.country = @items['Country']
    input.awards = @items['Awards']
    input.poster = @items['Poster']
    input.metascore = @items['Metascore']
    input.imdbrating = @items['imdbRating']
    input.imdbvotes = @items['imdbVotes']
    input.imdbid = @items['imdbID']
    input.something = @items['Type']
    input.response = @items['Response']
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
