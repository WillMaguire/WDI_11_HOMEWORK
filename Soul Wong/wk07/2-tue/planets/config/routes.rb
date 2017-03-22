Rails.application.routes.draw do
  get '/planet/index', to: 'planet#index'

  get '/planet/new', to: 'planet#new'
  post '/planet/new', to: 'planet#create'

  delete '/planet/delete', to: 'planet#delete'

  get '/planet/edit/:id', to: 'planet#edit'
  put '/planet/edit', to: 'planet#modify'

  get '/planet/:id', to: 'planet#view'

  post '/comments/new', to: 'comment#create'

  get '/login', to: 'session#new'
  post 'session/create', to: 'session#create'
  delete 'session/destroy', to: 'session#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
