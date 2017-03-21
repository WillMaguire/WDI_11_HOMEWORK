Rails.application.routes.draw do

  get '/' , to: 'planet#index'
  get '/planet' , to: 'planet#index'
  get '/planet/new' , to: 'planet#new'
  post '/planet/create' , to: 'planet#create'
  get 'planet/list' , to: 'planet#list'
  get 'planet/show/:id' , to: 'planet#show'
  delete '/planet/destroy' , to: 'planet#destroy'

  get 'comment/new'

  get 'comment/create'

  get 'comment/list'

  get 'comment/show'

  get 'comment/edit'

  get 'comment/update'

  get 'comment/delete'

  get 'comment/destroy'

end
