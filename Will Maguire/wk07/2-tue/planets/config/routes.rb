Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'
                      #controller name and then a method inside the controller  -- name, method/action
  get '/planet', to: 'planet#index'
  get '/planet/new', to: 'planet#new'
  post '/planet', to: 'planet#create'
  delete '/planet', to: 'planet#destroy'
  get '/planet/:id', to: 'planet#show'

  get '/user/new', to: 'user#new'
  post '/user', to: 'user#create'

  root 'planet#index'
  # shortcut to home file

end
