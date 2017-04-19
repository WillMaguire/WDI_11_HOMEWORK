Rails.application.routes.draw do

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/planets', to: 'planets#index'
  post '/planets', to: 'planets#create'
  get '/planets/new', to: 'planets#new'
  get '/planets/:id', to: 'planets#show'
  put '/planets/:id', to: 'planet#edit'
  delete '/planets/:id', to: 'planets#destroy'

end
