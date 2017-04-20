require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

get '/' do
  if !params[:movie_name].nil?
    #find movie in local db
    results = search_movie_local_db(params[:movie_name])

    if(results.cmd_tuples).to_i <= 0
      @title = params[:movie_name]
      redirect "/search?movie_name=#{@title}"
    else
      puts @movieSingle = results[0]
      erb :about
    end

  elsif !params[:movie_id].nil?
    #search local db for movie by id if not exists, search omdb
    results = search_movie_local_imdb(params[:movie_id])

    if(results.cmd_tuples).to_i <= 0
      movie_omdb = HTTParty.get("http://omdbapi.com/?i=#{params[:movie_id]}")
      copy_to_local_db(movie_omdb)
      #copy from omdb then retrieve and pass to movies about page
      results_local = search_movie_local_imdb(params[:movie_id])
      @movieSingle = results_local[0]
      erb :about
    else
      @movieSingle = results[0]
      erb :about
    end

  else
    erb :index
  end

end

get '/search' do
  @movie= HTTParty.get("http://omdbapi.com/?s=#{params[:movie_name]}")

  if @movie["Response"] == "True"

    if @movie["totalResults"].to_i == 1
      @movieSingle = HTTParty.get("http://omdbapi.com/?t=#{params[:movie_name]}")
      erb :about
    else
      @result = @movie
      erb :index
    end

  else
    puts "Nothing found"
  end

end

def copy_to_local_db(movie)
  conn = PG.connect(dbname:'movie_db')
  sql = "INSERT INTO movies(title,year,runtime,genre,writer,plot,language,country,awards,\
  poster,metascore,imdbrating,imdbid,type,director,rated,imdbvotes) VALUES('#{conn.escape_string(movie["Title"])}','#{movie["Year"]}','#{movie["Runtime"]}'\
  ,'#{movie["Genre"]}','#{movie["Writer"]}','#{conn.escape_string(movie["Plot"])}','#{movie["Language"]}','#{movie["Country"]}'\
  ,'#{movie["Awards"]}','#{movie["Poster"]}','#{movie["Metascore"]}','#{movie["imdbRating"]}',\
  '#{movie["imdbID"]}','#{movie["Type"]}','#{movie["Director"]}','#{movie["Rated"]}',\
  '#{movie["imdbVotes"]}');"
  results = conn.exec(sql)
  conn.close
end

def search_movie_local_db(movie_title)
  conn = PG.connect(dbname:'movie_db')
  search = "SELECT * FROM movies where title='#{movie_title}';"
  results = conn.exec(search)
  conn.close
  return results
end

def search_movie_local_imdb(movie_imdb_id)
  conn = PG.connect(dbname:'movie_db')
  search = "SELECT * FROM movies where imdbid='#{movie_imdb_id}';"
  results = conn.exec(search)
  conn.close
  return results
end
