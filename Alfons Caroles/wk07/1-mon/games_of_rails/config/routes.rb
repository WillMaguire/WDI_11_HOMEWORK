Rails.application.routes.draw do
  get '/games', to: 'games#index'
  get '/games/magic8ball', to: 'games#magic8ball'
  post '/games/magic8ball', to: 'games#magic8ball'
  get '/games/secretnumber', to: 'games#secretnumber'
  get '/games/secretnumber/win', to: 'games#win'
  get '/games/secretnumber/lose', to: 'games#lose'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'
end
