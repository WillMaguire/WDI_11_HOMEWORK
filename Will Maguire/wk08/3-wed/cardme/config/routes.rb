Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/api/cards', to: 'api/cards#index'
  # delete 'api/cards', to: 'api/cards#destroy'
  namespace :api do
    resources :cards # , excpt: [:destroy]
  end

  root 'pages#home'

end
