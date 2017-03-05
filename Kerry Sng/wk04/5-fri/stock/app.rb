require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'




get '/' do

  erb :index

end

get '/index' do
  @stock_symbol = params[:stock_symbol].to_s.upcase
  @stock = YahooFinance::get_standard_quotes(@stock_symbol)[@stock_symbol]
  erb :index
end
