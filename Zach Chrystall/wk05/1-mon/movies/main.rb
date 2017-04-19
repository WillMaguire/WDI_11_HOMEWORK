require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
# require 'httparty'

get '/' do

  erb :index
end

get '/search' do
  result = HTTParty.get('http://omdbapi.com/?t=once')
  binding.pry
  @t = params[:t]
  erb :search
end
