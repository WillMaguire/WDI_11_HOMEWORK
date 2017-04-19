require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'


get '/' do
  erb :index
end

get '/result' do
  quote_symbols = params[:quote]
  quote_type = YahooFinance::StandardQuote
  quote = YahooFinance::get_quotes( quote_type, quote_symbols )
  @symbol = "Company Code: #{quote[quote_symbols].symbol.upcase}"
  @price = "Last Traded Price: $" + "#{quote[quote_symbols].ask}"

  erb :index
end
