require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  @result = nil
  erb :index

end

get '/s' do
  if params[:film]
    @result =  HTTParty.get("http://omdbapi.com/?s=#{params[:film]}")
  end

  erb :index
end

get "/t" do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:movie]}")
erb :filmInfo
end

get '/about' do
  erb :about

end
