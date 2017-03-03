require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

def get_quote(stock)
  data = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)[stock]

  if data == nil
    { lastTrade: 0, changePoints: 0, changePercent: 0 }
  else
    { lastTrade: data.lastTrade, changePoints: data.changePoints, changePercent: data.changePercent }
  end
end

get '/' do
  @stock_name = params[:stock]
  @stock_data = get_quote(@stock_name)
  erb :index
end
