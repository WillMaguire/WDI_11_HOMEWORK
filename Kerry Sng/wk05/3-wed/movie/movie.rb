require 'HTTParty'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  erb :index
end

get '/search' do
  result = HTTParty.get("http://www.omdapi.com/?s=" +(params[:search]))
  erb :index
end


get '/display' do
  result = HTTParty.get("http://www.omdapi.com/?i=" +(params[:id]))
  erb :display
end
