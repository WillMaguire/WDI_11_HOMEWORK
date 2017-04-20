Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'intro#index' # route directing straight to index file

  get '/games/eightballpage', to: 'games#eightballpage' #route directing straight to eightballpage file

  get '/games/secretnumberpage', to: 'games#secretnumberpage' #route directing straight to secretnumberpage file

  get '/games/rock_paper_scissors', to: 'games#rock_paper_scissors' #route directing straight to rockpaperscissorspage file

  post '/games/eightballanswer', to: 'games#eightballanswer'  #route directing to a method in games controller

  post '/games/secretnumberanswer', to: 'games#secretnumberanswer'

  post '/games/rock_paper_scissors_play', to: 'games#rock_paper_scissors_play'


end
