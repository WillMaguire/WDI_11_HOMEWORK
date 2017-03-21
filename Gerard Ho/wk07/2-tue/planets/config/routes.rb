Rails.application.routes.draw do
  get '/', to: 'home#main'
  post '/login', to: 'home#start_session'
  delete '/logout', to: 'home#end_session'
  put '/new', to: 'home#new_planet'
  post '/comment/:id', to: 'home#comment'
end
