require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'


get '/search' do
  binding.pry
  if( params[:movie_name].nil? && params[:movie_id].nil? )
    erb :index

  elsif params[:movie_name].nil?
    @movieSingle = HTTParty.get("http://omdbapi.com/?i=#{params[:movie_id]}")
    erb :about

  else
  @result = HTTParty.get("http://omdbapi.com/?s=#{params[:movie_name]}")
    @num_of_results = @result["totalResults"].to_i

      if( @num_of_results == 1)
        @name_of_movie = @result["Search"][0]["imdbID"]
        @movieSingle = HTTParty.get("http://omdbapi.com/?i=#{@name_of_movie}")

        if( @movieSingle["Response"] == "True")
          erb :about
        else
          "Movie not found"
        end
      else
        erb :index
      end

  end

end

get '/' do
  conn = PG.connect(dbname:'movie_db')
  @title = "Young and Dangerous"

  # @title = params[:movie_name]
  search = "SELECT * FROM movies where title='#{@title}';"
  results = conn.exec(search)
  conn.close
  if(results.cmd_tuples).to_i <= 0
    puts "Not Exists"
    params[:movie_name] = @title
    redirect "/search?movie_name=#{@title}"
    ##Search for list online db or single movie then execute copy
    ##single
    # @movie = HTTParty.get("http://omdbapi.com/?i=tt0116456")
    # sql = "INSERT INTO movies(title,year,runtime,genre,writer,plot,language,country,awards,\
    # poster,metascore,imdbrating,imdbid,type) VALUES('#{@movie["Title"]}','#{@movie["Year"]}','#{@movie["Runtime"]}'\
    # ,'#{@movie["Genre"]}','#{@movie["Writer"]}','#{conn.escape_string(@movie["Plot"])}','#{@movie["Language"]}','#{@movie["Country"]}'\
    # ,'#{@movie["Awards"]}','#{@movie["Poster"]}','#{@movie["Metascore"]}','#{@movie["imdbRating"]}',\
    # '#{@movie["imdbID"]}','#{@movie["Type"]}');"

  else
    puts "Exists"
    puts @movieSingle = results[0]
    erb :about
  end

end
