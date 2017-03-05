require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :index
end

# # get '/' + result do  //How to parse in a request here properly?  I keep breaking it.  The concept makes perfect sense and I'm able to retrieve the data and understand its structure... just these damned redirects(I raged out and started over a few times)
#   erb :index
# end

ticker = ticker.chomp
ticker = @ticker

result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)

puts result[0] => "n"

# result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
binding.pry
