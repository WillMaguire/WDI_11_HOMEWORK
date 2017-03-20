Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'main#index'

  get '/games/eightballpage', to: 'games#eightballpage'

  get '/games/secretnumberpage', to: 'games#secretnumberpage'

  get '/games/rockpaperscissorspage', to: 'games#rockpaperscissorspage'

end
