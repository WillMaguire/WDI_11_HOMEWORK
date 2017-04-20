Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/games', to: 'games#index'

get '/magic8ball', to: 'games#magic8ball'
post 'magic8ball', to: 'games#magic8ball'
get '/secretnumber', to: 'games#secretnumber'
post '/secretnumber', to: 'games#secret_number_answer'
get '/rockpaperscissors', to: 'games#rockpaperscissors'
post '/rockpaperscissors/:throw', to: 'games#rock_paper_scissors_play'
get '/winner', to: 'games#winner'
get '/looser', to: 'games#looser'
end
