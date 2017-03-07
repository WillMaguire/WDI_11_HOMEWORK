require 'httparty'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  @name = params[:name]
  @results = {}
  page_limit = 100

  if @name != nil
    File.open("search_history.txt", "a") do |file|
      file << @name + "\n"
    end

    page_limit.times do |i|
      @result = HTTParty.get("http://omdbapi.com/?s=#{@name}&page=#{i + 1}")

      if @results.empty?
        @results = @result
      else
        break if @result["Response"] == "False"
        @results["Search"] += @result["Search"]
      end
    end

    if @results["Response"] == "True" and @results["Search"].length == 1
      redirect "/about?name=#{@name}"
    end
  end

  erb :index
end

get '/about' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}")
  erb :about
end

get '/history' do
  @history = []
  File.open("search_history.txt") do |file|
    @history = file.readlines.map(&:chomp)
  end

  erb :history
end
