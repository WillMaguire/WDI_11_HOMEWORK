require "pry"
require "sinatra"
require "sinatra"
require "sinatra/reloader"
require "httparty"

set :raise_errors, false
set :show_exceptions, false

get '/' do
  @search_results = ''
  @result = ''
  erb :index
end

get '/history' do
  @history = [] # assuming I will get an array of leads
  File.open('search_history.txt') do |file|
    file.each do |line|
      @history << line.chomp
    end
  end
  erb :history
end

error do
    redirect to('/')
end

post '/' do
  File.open('search_history.txt', 'a') do |file|
    file << "#{Time.now}: #{params[:title]}\n"
  end
  search_result = HTTParty.get("http://omdbapi.com/?s=#{ params[:title] }")
  returned_results = search_result['Search']
  if returned_results.length > 1
    @search_results = returned_results
    erb :index
  else
    @result = HTTParty.get("http://omdbapi.com/?t=#{ params[:title] }")
    erb :about
  end
end

post '/movie' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{ params[:title] }")
  erb :about
end
