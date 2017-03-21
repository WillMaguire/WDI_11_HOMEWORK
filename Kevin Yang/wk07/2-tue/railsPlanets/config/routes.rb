Rails.application.routes.draw do



  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/planets', to: 'planets#index'
  get '/planets/new', to: 'planets#new'
  post '/planets', to: 'planets#create'
  delete '/planets', to: 'planets#destroy'
  get '/planets/:id/edit', to: 'planets#edit'
  put '/planets/:id', to: 'planets#editing'
  root 'planets#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
