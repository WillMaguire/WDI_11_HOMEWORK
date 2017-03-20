Rails.application.routes.draw do

  get '/about', to: 'pages#about'

  get '/index', to: 'games#index'

  get '/games/magic_8_ball/new', to: 'games#magic_8_ball_new'

  post '/games/magic_8_ball', to: 'games#magic_8_ball'

  get '/games/secret_number/new', to: 'games#secret_number_new'

  post '/games/secret_number', to: 'games#secret_number'

  get '/games/rock_paper_scissors/new', to: 'games#rock_paper_scissors_new'

  post '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'

end
