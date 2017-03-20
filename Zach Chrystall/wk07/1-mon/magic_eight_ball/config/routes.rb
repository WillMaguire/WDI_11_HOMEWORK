Rails.application.routes.draw do

  get '/games/eightball', to: 'games#eightball'
  post '/games/eightball', to: 'games#eight_ball_ask'

  get '/games/secret_number', to: 'games#secret_number'
  get "/games/secret_number/:user_guess", to: 'games#check_secret_number'

  get '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'


end
