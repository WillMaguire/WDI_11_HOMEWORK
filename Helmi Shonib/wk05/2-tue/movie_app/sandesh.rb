Skip to content
This repository
Pull requests
Issues
Gist
 @helminems
 Sign out
 Watch 0
  Star 0
  Fork 18 deesk/WDI_11_HOMEWORK
forked from kasun-maldeni/WDI_11_HOMEWORK
 Code  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathWDI_11_HOMEWORK/Sandesh Karki/wk05/3-wed/movie_3/main.rb
9ff00aa  6 days ago
@deesk deesk without css
1 contributor
RawBlameHistory
85 lines (70 sloc)  1.88 KB

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
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
