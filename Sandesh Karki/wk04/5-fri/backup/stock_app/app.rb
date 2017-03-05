
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

def get_quote(stock)
  data = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)

end

get '/' do
  @stock_name = params[:stock]
  @stock_data = get_quote(@stock_name)

  erb :index
end





# binding.pry
