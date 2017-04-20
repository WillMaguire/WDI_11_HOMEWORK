require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'httparty'

get '/' do
  @result = {}
  erb :index
end

get '/movie2' do
  title = params[:title]
  @result = HTTParty.get('http://omdbapi.com/?t='+title)
  conn = PG.connect(dbname: 'movies')
  sql = "INSERT INTO movies (title, year, rated, released, director, poster)
  VALUES (
        '#{@result['Title']}',
        '#{@result['Year']}',
        '#{@result['Rated']}',
        '#{@result['Released']}',
        '#{@result['Director']}',
        '#{@result['Poster']}')"
  conn.exec(sql)
  conn.close
  # @movie = result[params[:input]]
  erb :movie
end

get '/movie' do
      title = params[:title]
      @result2 = HTTParty.get('http://omdbapi.com/?s='+title)

      if (@result2['Search'].length == 1)
        redirect '/movie2?title='+ title

      else
        erb :list
      end

    end
