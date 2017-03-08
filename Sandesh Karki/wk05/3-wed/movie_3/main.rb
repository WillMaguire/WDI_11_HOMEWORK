
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'httparty'

get '/' do

  @result = {}
  erb :index

end

get '/search_result' do

  title = params[:title]
  @s_results = HTTParty.get('http://omdbapi.com/?s=' + title)

  if (@s_results['Search'].length == 1)

    redirect '/single_movie?title='+ title
  else

    erb :movielist

  end

end

get '/single_movie' do
  # return params.to_json
  title = params[:title]

  @result = HTTParty.get('http://omdbapi.com/?t=' + title)
  erb :movie

end
