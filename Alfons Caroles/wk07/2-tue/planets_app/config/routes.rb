Rails.application.routes.draw do

  get '/login', to: 'session#new'

  post '/session', to: 'session#create'

  delete '/session', to: 'session#destroy'

  get '/planet', to: 'planet#index'
  get '/planet/new', to: 'planet#new'
  post '/planet', to: 'planet#create'
  delete '/planet', to: 'planet#destroy'
  get '/planet/:id', to: 'planet#show'

  get '/:id/comment/new', to: 'comment#new'
  post '/comment', to: 'comment#create'

  # get '/' to: 'planet#index'
  root 'session#new'

end
