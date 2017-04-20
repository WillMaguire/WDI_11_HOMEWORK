Rails.application.routes.draw do

  get '/comments', to: 'comments#new'
  post '/comments', to: 'comments#create'
  delete '/comment/:id', to: 'comments#destroy'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/planets', to: 'planets#index'
  post '/planets', to: 'planets#create'
  delete '/planets/:id', to: 'planets#destroy'

end
