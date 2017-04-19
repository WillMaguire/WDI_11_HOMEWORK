require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  @stock_price = ''
  @stock_symbol = ''
  @company_name = ''
  erb :index
end

get '/searched' do
  @stock_symbol = params[:stock_symbol]
  # binding.pry
  stock_info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_symbol)
  @company_name = stock_info[@stock_symbol].name
  @stock_price = stock_info[@stock_symbol].ask
  redirect "/?stock_price=#{@stock_price}&name=#{@company_name}&stock_symbol=#{@stock_symbol}"
end


# binding.pry
