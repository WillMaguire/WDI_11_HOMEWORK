Rails.application.routes.draw do

  # get '/api/cards', to: 'cards#index'
  # delete '/api/cards', to: 'api/cards#destroy'

  namespace :api do
    resources :cards #, except: [:destroy] excludes the route Delete/destroy
  end

  root 'pages#home'

end
