Rails.application.routes.draw do

get '/index', to: 'pages#index'

get '/games/magic_eight', to: 'games#magic_eight'



post '/games/magic_eight/answer', to: 'games#magic_eight_answer'

get '/games/secret_number', to: 'games#secret_number'

post '/games/secret_number/answer', to: 'games#secret_number_answer'

get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_new'

post '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'


end
