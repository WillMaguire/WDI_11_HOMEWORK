require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'

# get '/' do
#   return "Hello"
# end

get "/" do
  result = YahooFinance.get_quotes(YahooFinance::StandardQuote, params[:stock])
  puts result[params[:stock]].lastTrade
  # result = params[:stock]
  erb :index
end



# binding.pry
