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

# all products are shown here, home page
get '/' do
  @products = Product.all
  erb :index
end

# creating new product and saving new product

post '/products/new' do
  @product = Product.new
  product.name = params[:name]
  product.price = params[:price]
  product.availability = params[:availability]
  product.image_url = params[:image_url]

  if product.save
    redirect '/'
  else
    erb :new
  end
end

# showing about page for product
get '/products/:id' do

  @product = Product.find(params[:id])
  erb :show
end

# making modifications to the product
get '/product/:id/edit' do

  @product = Product.find(params[:id])
  erb :edit
end

put '/products/:id' do

  product = Product.find(params[:id])
  product.name = params[:name]
  product.price = params[:price]
  product.availability = params[:availability]

  product.save
  redirect "/products/#{params[:id]}"
end
not_found do

  "The page you are looking for does not exist!!"
  erb :not_found
end
# binding.pry
#
# # deleting or destroying a product
# delete '/products/delete' do
#   @product = Product.find(params[:id])
#   product.destroy
#
#   redirect '/'
# end


# binding.pry
