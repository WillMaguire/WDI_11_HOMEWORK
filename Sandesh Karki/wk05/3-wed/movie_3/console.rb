
require 'pry'
require 'pg'
require 'httparty'


def run_sql(sql)
  conn = PG.connect(dbname: 'omdb_movies')
  @sql_result = conn.exec(sql)
  conn.close
  @sql_result
end

sql_serch_movie = "SELECT *
                   FROM movies
                   WHERE title = '300';"
run_sql(sql_serch_movie)




binding.pry
