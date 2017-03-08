require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

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
  conn = PG.connect(dbname: 'movies_database')
  input = "INSERT INTO movies(
    title,
    year,
    rated,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    language,
    country,
    awards,
    poster,
    metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    type,
    response
  ) VALUES (
    '#{@items['Title']}',
    '#{@items['Year']}',
    '#{@items['Rated']}',
    '#{@items['Released']}',
    '#{@items['Runtime']}',
    '#{@items['Genre']}',
    '#{@items['Director']}',
    '#{@items['Writer']}',
    '#{@items['Actors']}',
    '#{@items['Plot']}',
    '#{@items['Language']}',
    '#{@items['Country']}',
    '#{@items['Awards']}',
    '#{@items['Poster']}',
    '#{@items['Metascore']}',
    '#{@items['imdbRating']}',
    '#{@items['imdbVotes']}',
    '#{@items['imdbID']}',
    '#{@items['Type']}',
    '#{@items['Response']}'
  );"
  # return input
  conn.exec(input)
  conn.close
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
