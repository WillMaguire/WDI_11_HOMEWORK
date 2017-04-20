require "pry"
require "sinatra"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get '/' do
  @result = {}
  erb :index
end

post '/' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{ params[:title] }")
 erb :about
 end
