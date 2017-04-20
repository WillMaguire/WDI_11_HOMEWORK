Rails.application.routes.draw do
  get '/', to: 'pages#index'
  get '/magicball', to: 'pages#magicball'
  get '/secretnumber', to: 'pages#secretnumber'
  get '/rockpaperscissors', to: 'pages#rockpaper'
  post '/magicball', to: 'pages#magicball'
  post '/secretnumber', to: 'pages#secretnumber'
  get '/rockpaperscissors/:throw', to: 'pages#rockpaper'
end
