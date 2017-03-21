Rails.application.routes.draw do

  get '/', to: 'games#index'
  
  get '/magic8ball', to: 'magic8ball#m8ball_page'
  get '/play8ball', to: 'magic8ball#playball'
  # get '/display', to: 'games#answer_page'

  get '/secret_number', to: 'secret_number#index'
  get '/show_condition', to: 'secret_number#show'


end
