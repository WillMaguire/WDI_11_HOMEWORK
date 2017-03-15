require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require "pg"
require 'httparty'
require_relative 'database_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

get '/movie_list' do
  result = HTTParty.get('http://omdbapi.com/?s=' + params['film'])
  if result['Search'].count === 1
    redirect "/movie/#{params[:film]}"
  else
    @movies = result['Search']
    erb :movie_list
  end

end

get '/movie/:name' do
  result = Movie.find_by(title: "#{params[:name]}")
  if result != nil
    @title = result.title
    @year = result.year
    @genre = result.genre
    @actors = result.actors
    @plot = result.plot
    @country = result.country
    @awards = result.awards
    @director = result.director
    @poster_url = result.poster_url

  else
    result_external_db = HTTParty.get("http://omdbapi.com/?t="+"#{params[:name]}")
    @title_external_db = result_external_db['Title']
    @year_external_db = result_external_db['Year']
    @genre_external_db = result_external_db['Genre']
    @actors_external_db = result_external_db['Actors']
    @plot_external_db = result_external_db['Plot']
    @country_external_db = result_external_db['Country']
    @awards_external_db = result_external_db['Awards']
    @director_external_db = result_external_db['Director']
    @poster_url_external_db = result_external_db['Poster']

    Movie.create(
      :title => @title_external_db,
      :year => @year_external_db,
      :genre => @genre_external_db,
      :actors => @actors_external_db,
      :plot => @plot_external_db,
      :country => @country_external_db,
      :awards => @awards_external_db,
      :director => @director_external_db,
      :poster_url => @poster_url_external_db
      )

  end

  erb :movie

end
