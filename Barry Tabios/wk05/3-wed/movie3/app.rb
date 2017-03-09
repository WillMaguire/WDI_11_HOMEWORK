# Movies 3: Return of Son of Movies
#
# A more more advanced version of the Movies Sinatra App
#
# Summary
#
# The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.
#
# The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.
#
# Use activerecord. Seriously



require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'


get '/' do
  erb :index
end


get '/search' do
  @result = HTTParty.get("http://omdbapi.com/?s=#{params[:input_search]}")
  erb :search
end

get '/about' do
  movie_title = params[:name]

  conn = PG.connect(dbname: 'movie_db')
  sql = "SELECT title FROM movies WHERE title = '#{params[:name]}';"
  result = conn.exec(sql) # gets the result of the executed file from sql
  # conn.close

  if result.cmd_tuples == 0 # cmd_tuples returns number of rows affected if none it will return a zero
    film = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")
    @poster = film["Poster"]
    @title = film["Title"]
    @year = film["Year"]
    @rate = film["Rated"]
    @runtime = film["Runtime"]
    @genre = film["Genre"]
    @director = film["Director"]
    @writer = film["Writer"]
    @actors = film["Actors"]
    @plot = film["Plot"]
    @language = film["Language"]
    @country = film["Country"]

    sql = "INSERT INTO movies(title, year, rate, runtime, genre, director, writer, actors, plot, language, country, poster)
    VALUES ('#{@title}',#{@year},'#{@rate}','#{@runtime}','#{@genre}', '#{@director}', '#{@writer}', '#{@actors}', '#{@plot}', '#{@language}', '#{@country}', '#{@poster}');"
    conn.exec(sql)

  else
    sql = "SELECT * FROM movies WHERE title ='#{params[:name]}';"
    film = conn.exec(sql)

    @poster = film[0]["poster"]
    @title = film[0]["title"]
    @year = film[0]["year"]
    @rate = film[0]["rated"]
    @runtime = film[0]["runtime"]
    @genre = film[0]["genre"]
    @director = film[0]["director"]
    @writer = film[0]["writer"]
    @actors = film[0]["actors"]
    @plot = film[0]["plot"]
    @language = film[0]["language"]
    @country = film[0]["country"]

  end

  conn.close
  erb :about
end
