Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'pages#index'
  get '/games/magic_8_ball', to: 'games#magic_8_ball'
  get '/games/magic_8_ball/answer', to: 'games#magic_8_ball_answer'
  get '/games/secret_number', to: 'games#secret_number'
  get '/games/secret_number/result', to: 'games#secret_number_result'
  get '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'
end
