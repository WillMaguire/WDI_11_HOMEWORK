
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'httparty'

def run_sql(sql)
  conn = PG.connect(dbname: 'omdb_movies')
  @sql_result = conn.exec(sql)
  conn.close
  @sql_result #return
end

def search_history(str, search_type)
  File.open('search_history.csv','a') do |file|
      # file.puts params[:title] to write in file with single virable if need form than one use array as below
      file << "#{str}: #{Time.now}  #{search_type}\n"
  end
end

get '/' do
  erb :index
end

get '/search_result' do

  title = params[:title]

  #writing in file List type search (/?s)
  search_history('List Search(/?s)', params[:title] )

  @s_results = HTTParty.get('http://omdbapi.com/?s=' + title)

  if @s_results['Response'] == 'False'
    erb :not_found
  else
    if (@s_results['Search'].length == 1)
        redirect '/single_movie?title='+ title
    else
      erb :movielist
    end
  end
end

get '/single_movie' do

  title = params[:title]
  @result = HTTParty.get('http://omdbapi.com/?t=' + title)
  #writing in file List type search (/?s)
  search_history('Single Movie Search(/?t)', @result['Title'])

  sql_movie_title = "SELECT *
                     FROM movies
                     WHERE title = '#{@result['Title']}';"
  run_sql(sql_movie_title)

  if @sql_result.ntuples == 0
    sql = "INSERT INTO movies
            (title, rated, released, runtime, director, poster )
            VALUES (
            '#{@result['Title']}',
            '#{@result['Rated']}',
            '#{@result['Released']}',
            '#{@result['Runtime']}',
            '#{@result['Director']}',
            '#{@result['Poster']}'
            );"
    run_sql(sql)
    erb :movie
  else
    erb :from_db
  end
end

get '/history' do
  @searched_keywords = []
  File.open('search_history.csv') do |file|
    file.each do |line|
    @searched_keywords << line.chomp
    end
  end
  erb :search_history
end
