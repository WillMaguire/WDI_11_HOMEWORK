Rails.application.routes.draw do

  namespace :api do
    resources :cards #, except: [:destroy]
  end

  root 'pages#home'

end
