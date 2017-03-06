require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :index
end

get '/?stock_name='
 erb :index
end



stock_name = ticker.chomp
ticker = @ticker

result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)

puts result[0] => "n"

# result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
binding.pry
