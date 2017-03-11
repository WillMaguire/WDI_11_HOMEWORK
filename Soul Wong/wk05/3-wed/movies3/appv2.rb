require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

#revamp section
get '/' do
  params[:movie_name] = "Young and Dangerous"
  binding.pry
  if !params[:movie_name].nil?

    #no params so page loaded w/o params
    movie_title = params[:movie_name]
    results = search_movie_local_db(movie_title)
    if(results.cmd_tuples).to_i <= 0
      puts "Not Exists"
      params[:movie_name] = @title
      redirect "/search?movie_name=#{@title}"
    else
      puts "Exists"
      puts @movieSingle = results[0]
      erb :about
    end
    #params name not nil
    #search localdb for movie based on movie name
    #write a method to search local db and grab details back
    #write a method to save to local db
    #if name Exists, the grab all details then pass into about:index
    #if not exists then search OMDB and see response,
    #if response is true, grab all details then save into DB, from
    #db pass back details and pass into about index
    #nothing then search results and display to result page.erb
    #result page check if response false then diplsay not found!
  end
end

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

# get '/' do
#   # conn = PG.connect(dbname:'movie_db')
#   # @title = "Young and Dangerous"
#   # # @title = params[:movie_name]
#   # search = "SELECT * FROM movies where title='#{@title}';"
#   # results = conn.exec(search)
#   # conn.close
#
#
#
#
# end

def copy_to_local_db(movie)
  conn = PG.connect(dbname:'movie_db')
  sql = "INSERT INTO movies(title,year,runtime,genre,writer,plot,language,country,awards,\
  poster,metascore,imdbrating,imdbid,type) VALUES('#{movie["Title"]}','#{movie["Year"]}','#{movie["Runtime"]}'\
  ,'#{movie["Genre"]}','#{movie["Writer"]}','#{conn.escape_string(movie["Plot"])}','#{movie["Language"]}','#{movie["Country"]}'\
  ,'#{movie["Awards"]}','#{movie["Poster"]}','#{movie["Metascore"]}','#{movie["imdbRating"]}',\
  '#{movie["imdbID"]}','#{movie["Type"]}');"
  results = conn.exec(sql)
  # check if successfully inserted
  conn.close
end

def search_movie_local_db(movie_title)
  conn = PG.connect(dbname:'movie_db')
  search = "SELECT * FROM movies where title='#{movie_title}';"
  results = conn.exec(search)
  conn.close
  return results
end
