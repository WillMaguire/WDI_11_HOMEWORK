Rails.application.routes.draw do

  # get '/api/cards', to: 'api/cards#index'

  namespace :api do
    resources :cards
  end

  root 'pages#home'

end
