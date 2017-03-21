Rails.application.routes.draw do
  get 'planet/index', to: 'planet#index'

  get 'planet/new', to: 'planet#new'

  get 'planet/delete', to: 'planet#delete'

  get 'planet/edit', to: 'planet#edit'

  get 'planet/:id', to: 'planet#view'

  get '/login', to: 'session#new'
  post 'session/create', to: 'session#create'
  delete 'session/destroy', to: 'session#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
