Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'main#index'

  delete '/', to: 'main#destroy'

  get '/new', to: 'main#new'

  post '/', to: 'main#create'

  get '/edit', to: 'main#edit'

  put '/', to: 'main#update'

  patch '/', to: 'main#comment'
end
