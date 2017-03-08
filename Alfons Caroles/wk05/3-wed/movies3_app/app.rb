require "pry"
require "sinatra"
require "sinatra"
require "sinatra/reloader"
require "httparty"
require "pg"

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

get '/movie' do
  conn =  PG.connect(dbname: 'movies')
  sql = "SELECT * FROM movie_list WHERE title = '#{ params[:title] }';"
  @movie = conn.exec(sql)[0]
  conn.close
  erb :about
end

get '/movie/error' do
    @result = HTTParty.get("http://omdbapi.com/?t=#{ params[:title] }")
    erb :error
end

error do
    # conn =  PG.connect(dbname: 'movies')
    # sql = "INSERT INTO movie_list (
    #         title,
    #         year,
    #         rated,
    #         released,
    #         runtime,
    #         genre,
    #         director,
    #         writer,
    #         actors,
    #         plot,
    #         language,
    #         country,
    #         awards,
    #         imdbrating,
    #         imdbvotes,
    #         poster
    #         )
    #         VALUES(
    #         '#{ @result[0][1] }',
    #         #{ @result[1][1] },
    #         '#{ @result[2][1] }',
    #         '#{ @result[3][1] }',
    #         '#{ @result[4][1] }',
    #         '#{ @result[5][1] }',
    #         '#{ @result[6][1] }',
    #         '#{ @result[7][1] }',
    #         '#{ @result[8][1] }',
    #         '#{ @result[9][1] }',
    #         '#{ @result[10][1] }',
    #         '#{ @result[11][1] }',
    #         '#{ @result[12][1] }',
    #         #{ @result[14][1] },
    #         #{ @result[15][1] },
    #         );"
    # conn.exec(sql)
    # conn.close
    redirect '/movie/error'
end

post '/' do
  File.open('search_history.txt', 'a') do |file|
    file << "#{Time.now}: #{params[:title]}\n"
  end
  search_result = HTTParty.get("http://omdbapi.com/?s=#{ params[:title] }")
  @returned_results = search_result['Search']
  if @returned_results.length > 1
    @search_results = returned_results
    erb :index
  else
    redirect '/movie'
  end
end
