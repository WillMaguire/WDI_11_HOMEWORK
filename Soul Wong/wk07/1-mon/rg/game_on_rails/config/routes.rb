Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/magic', to: 'games#magic_question'
  post '/magic', to: 'games#magic_answer'
  get '/secretnumber', to: 'games#secret_number'
  post '/secretnumber', to: 'games#secret_number_guess'
  get '/games/rock_paper_scissors/', to: 'games#rock_paper_scissors'
  post '/games/rock_paper_scissors/play', to: 'games#rock_paper_scissors_play'
end
