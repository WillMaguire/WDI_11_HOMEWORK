require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :layout
end

get '/home' do
  erb :index
end

get '/about' do
  erb :about
end
