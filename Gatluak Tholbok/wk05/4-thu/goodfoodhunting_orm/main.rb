require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'database_config'
require_relative 'models/dish'
# router

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @dishes = Dish.all
  erb :index
end

get '/dishes' do
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]

  if
    dish.save
    redirect '/'
  else
    erb :new
  end
end

# localhost:4567/dishes?id=7
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  erb :show
end

get '/dishes/:id/dish_type' do
  dish.id = DishType.create(params[:id])
  dish.id = params[:name]
  dish.save
  erb :dish_type
end

delete '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.destroy

  redirect '/'
end

get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  erb :edit
end


put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect "/dishes/#{params[:id]}"
end
