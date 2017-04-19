require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  @stock = params[:stock]
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock)
  @result.each do |symbol, qt|
    puts "Quote: #{symbol}"
    puts qt.to_s
  end
  erb :index
end
