Rails.application.routes.draw do

  get '/', to: 'planets#index'

  get '/planets/new', to: 'planets#new'

  post '/planets', to: 'planets#create'

  get '/planets/:id', to: 'planets#show'

  delete '/planets', to: 'planets#destroy'


end
