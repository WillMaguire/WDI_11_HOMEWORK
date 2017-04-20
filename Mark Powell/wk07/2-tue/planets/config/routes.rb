Rails.application.routes.draw do
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'


  get '/planets', to: 'planets#index'
  get '/planets/new', to: 'planets#new'
  post 'planets', to: 'planets#create'
  delete '/planets', to: 'planets#destroy'

  get '/planets/:id', to: 'planets#show'

  root 'planets#index'

end
