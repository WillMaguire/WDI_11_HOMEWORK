Rails.application.routes.draw do
  root to: 'games#index'

  get '/eightball', to: 'games#eightball'
  get '/eightball', to: 'games#answer'
  post '/eightball/answer', to: 'games#answer'

  get '/rock_paper_scissors', to: 'games#rock_paper_scissors'
  post '/rock_paper_scissors', to: 'games#rock_paper_scissors'

  get '/secret_number', to: 'games#secret_number'
  post '/secret_number', to: 'games#secret_number'

end
