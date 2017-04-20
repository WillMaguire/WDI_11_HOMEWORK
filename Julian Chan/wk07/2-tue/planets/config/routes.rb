Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/planets/new', to: 'planets#new'
  get '/planets/:id', to: 'planets#show'
  get '/planets/:id/edit', to: 'planets#edit'
  post '/planets', to: 'planets#create'
  put '/planets', to: 'planets#update'
  delete '/planets', to: 'planets#destroy'

  post '/comments', to: 'comments#create'

  get '/login', to: 'session#new'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'

  root 'planets#index'
end
