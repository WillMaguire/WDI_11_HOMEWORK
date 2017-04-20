Rails.application.routes.draw do
  # get '/api/cards', to: 'cards#index'
  # delete '/api/cards', to: 'api/cards#destroy'
  namespace :api do
    resources :cards #, except: [:destroy] -->take out delete
  end

  root 'pages#home'
end
