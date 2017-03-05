require 'yahoofinance'
require 'pry'
require 'sinatra/reloader'
require 'sinatra'



# def get_quotes
#
#   result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT').
#
#   result.to_s
#
# end

get '/' do
  @stockticker = params[:ticker]

  @stock = YahooFinance.get_quotes(YahooFinance::StandardQuote, @stockticker)
  @ticker = @stock[@stockticker].ticker
  @stock_name = @stock[@stockticker].name
  @current_price = @stock[@stockticker].lastTrade

  erb(:stock)


end

# binding.pry
