require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
# require 'httparty'

get '/' do

  erb :index
end

get '/search' do
  @t = params[:t]
  erb :search
end
