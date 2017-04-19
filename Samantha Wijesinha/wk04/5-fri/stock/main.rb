require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'yahoofinance'

#
# Build a Sinatra App that will take a stock symbol and display the stock price
# The stock symbol e.g. APPL should be inputted via the url as query string
# The result should be rendered in the browswer with ERB.
# The background colour should be mistyrose.

# Define a method that makes a request to the YahooFinance api via the YahooFinance gem.
#
# This method should take, as paramater, a stock ticker
# This method should return data about the stock
# Test this method manually in pry
# Display, for example, google's stock price when there is GET request to /?stock=APPL
#
# The file should be index.erb
# All the above should work without the need of any form input.
#

get '/' do
  @info = ""
  erb (:index)

end

get '/stock' do

  stock = params[:stock_code]

  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)
  @stock_name = @result[stock].name
  @stock_price = @result[stock].ask.to_s
  
  erb (:index)

end
