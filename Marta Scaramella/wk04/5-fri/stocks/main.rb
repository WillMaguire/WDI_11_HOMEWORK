require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'

get "/" do
  result = YahooFinance.get_quotes(YahooFinance::StandardQuote, params[:stock])
  @result_final = result[params[:stock]].lastTrade
  erb (:index)
end
