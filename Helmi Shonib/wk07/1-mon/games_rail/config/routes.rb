Rails.application.routes.draw do

  get '/', to: 'games#index'
  get '/magic_8_ball', to: 'games#magic_8_ball'
  get '/secret_number', to: 'games#secret_number'
  get 'rock_paper_scissors', to: 'games#rock_paper_scissors'

  # get '/magic_8_ball', to: 'magic8ball#answer'
  get '/test', to: 'magic8ball#answer'

end
