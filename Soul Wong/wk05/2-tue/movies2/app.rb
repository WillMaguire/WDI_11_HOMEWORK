require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
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
