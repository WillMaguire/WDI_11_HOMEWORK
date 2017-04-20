Rails.application.routes.draw do

  get '/games', to: 'pages#index'

  get '/games/magic8Balls', to: 'games#magic8Balls'
  get '/games/secretNumber', to: 'games#secretNumber'
  get '/games/rockPaperScissors', to: 'games#rockPaperScissors'

  post '/games/magic8Balls', to: 'games#fortuneTelling'
  post '/games/secretNumber', to: 'games#guessNumber'
  post '/games/rockPaperScissors', to: 'games#rpsOutcome'
end
