require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do

  @org = ''
  @change = ''
  @date = ''
  @dayHigh = ''
  @dayLow = ''
  @averageDailyVolume = ''
  erb :index
end

get '/result' do
  @org = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].name
  @current = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].ask
  @change = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].change
  @date = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].date
  @dayHigh = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].dayHigh
  @dayLow = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].dayLow
  @averageDailyVolume = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])[params[:stock]].averageDailyVolume

  erb :index

end

# binding.pry
