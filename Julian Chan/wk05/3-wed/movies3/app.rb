require 'httparty'
require 'pg'
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

headers = %w(title year rated released runtime genre director writer actors plot language country awards poster metascore imdbrating imdbvotes imdbid type)

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
  conn = PG.connect(dbname: "movies")
  sql = "SELECT * FROM movies WHERE lower(title) = lower('#{params[:name]}');"
  @result = conn.exec(sql).first

  if @result == nil
    @result = HTTParty.get("http://omdbapi.com/?t=#{params[:name]}").map { |k, v| [k.downcase, v.gsub("'", "''")] }.to_h
    sql = "INSERT INTO movies (#{headers.join(", ")}) VALUES (#{headers.map { |h| "'#{@result[h]}'" }.join(", ")});"
    conn.exec(sql)
  end

  conn.close

  erb :about
end

get '/history' do
  @history = []
  File.open("search_history.txt") do |file|
    @history = file.readlines.map(&:chomp)
  end

  erb :history
end
