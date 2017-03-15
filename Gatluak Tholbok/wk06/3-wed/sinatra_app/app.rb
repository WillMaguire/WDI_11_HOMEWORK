require 'pry'
require 'sinatra'
require 'active_record'
require 'sinatra/reloader'
require_relative 'database_config'
require 'pg'
require_relative 'models/products'


after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @product = Product.all
  erb :index
end

get '/' do
end

get '/' do
  erb :new
end

post '/posts' do
  product = Product.new
  product.id = params[:id]
  product.name = params[:name]
  product.image_url = params[:image_rul]
  product.price = params[:price]
  product.availability = params[:availability]

  product.save
  erb :show
end

get '/products/' do
  product = Product.find(params[:name])
  product.destroy

  product.save
  erb :show
end

put '/edit' do
  product = Product.find(params[:id])
  product.name = params[:name]
  product.image_url = params[:image_url]
  product.price = params[:price]
  product.availability = [:availability]

  product.save

  erb :edit
end


post '/products' do
  @product = Product.find(params[:id])
  product.destroy

  product.save
  erb :show
end
