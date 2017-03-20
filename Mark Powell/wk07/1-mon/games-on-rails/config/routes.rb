Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'games#index'

  get '/eightball', to: 'eightball#index'
  post '/eightball/answer', to: 'eightball#answer'

  get '/numbers', to: 'numbers#index'
  post '/numbers/check', to: 'numbers#check'

end
