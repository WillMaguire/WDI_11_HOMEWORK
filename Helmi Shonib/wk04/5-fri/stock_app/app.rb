require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'


get '/' do
result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:input])
@stock = result[params[:input]].lastTrade
erb :index
end
