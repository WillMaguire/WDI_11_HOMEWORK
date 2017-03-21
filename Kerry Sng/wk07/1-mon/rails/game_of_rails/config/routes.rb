Rails.application.routes.draw do

get '/play_magic', to: 'games#index' #controller name/method name in controller
get '/guess_number', to: 'games#index'

end
