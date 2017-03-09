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
  result = conn.exec(sql) # gets the result of the executed file from sql / result will contain a hash within a hash containing key value pairs,
  # conn.close

  if result.cmd_tuples == 0 # cmd_tuples returns number of rows detected if none it will return a zero
    film = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")

    @poster = film["Poster"].gsub(/'/, "''")
    @title = film["Title"].gsub(/'/, "''")
    @year = film["Year"]
    @rate = film["Rated"].gsub(/'/, "''")
    @runtime = film["Runtime"].gsub(/'/, "''")
    @genre = film["Genre"].gsub(/'/, "''")
    @director = film["Director"].gsub(/'/, "''")
    @writer = film["Writer"].tr("'","''")
    @actors = film["Actors"].tr("'","''")
    @plot = film["Plot"].gsub(/'/, "''") # substitute ' with '' for sql command. sql throws syntax error due to single quotes for values.
    @language = film["Language"].gsub(/'/, "''")
    @country = film["Country"].gsub(/'/, "''")


    sql = "INSERT INTO movies(title, year, rate, runtime, genre, director, writer, actors, plot, language, country, poster)
    VALUES ('#{@title}',#{@year},'#{@rate}','#{@runtime}','#{@genre}', '#{@director}', '#{@writer}', '#{@actors}', '#{@plot}', '#{@language}', '#{@country}', '#{@poster}');"
    conn.exec(sql)

  else
    sql = "SELECT * FROM movies WHERE title ='#{params[:name]}';"
    film = conn.exec(sql)[0] # [0] is to obtain the just the key value pairs of that row. If i do film = conn.exec(sql) this will return an object name and key values pairs.

    @poster = film["poster"]
    @title = film["title"]
    @year = film["year"]
    @rate = film["rated"]
    @runtime = film["runtime"]
    @genre = film["genre"]
    @director = film["director"]
    @writer = film["writer"]
    @actors = film["actors"]
    @plot = film["plot"]
    @language = film["language"]
    @country = film["country"]

  end

  conn.close
  erb :about
end
