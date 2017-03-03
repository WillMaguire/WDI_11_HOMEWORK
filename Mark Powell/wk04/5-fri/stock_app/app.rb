require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb(:index)
end


get '/stock' do
  # stockname = "SNAP"
  # @stock = YahooFinance.get_quotes(YahooFinance::StandardQuote, stockname)
  # @symbol = @stock[stockname].symbol
  # @stock_name = @stock[stockname].name
  # @current_price = @stock[stockname].lastTrade
  @stocksymbol =  params[:symbol]

  @stock = YahooFinance.get_quotes(YahooFinance::StandardQuote, @stocksymbol)
  @symbol = @stock[@stocksymbol].symbol
  @stock_name = @stock[@stocksymbol].name
  @current_price = @stock[@stocksymbol].lastTrade
  # binding.pry
  erb(:stock)
end
