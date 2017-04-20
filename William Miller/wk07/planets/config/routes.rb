Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'planets#index'
  get '/planets', to: 'planets#index'

  get '/planets/new', to: 'planets#new' ##CREATE NEW PLANET
  post '/planets', to: 'planets#create'

  get '/planets/:id', to: 'planets#show' ## EDIT THE PLANET
  put '/planets/:id', to: 'planets#show'

  delete '/planets', to: 'planets#destroy' ## DELETE THE PLANET

end
