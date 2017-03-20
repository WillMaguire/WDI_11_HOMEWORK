require 'pry'
require 'sinatra'
require 'active_record'
require 'sinatra/reloader'
require 'pg'
require_relative 'database_config'
require_relative 'models/products'
require_relative 'models/users'

after do
  ActiveRecord::Base.connection.close
end

enable :sessions

helpers do

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in? # should return a boolean value based on the user's status
    !!current_user
  end
end
# all products are shown here, home page
get '/' do
  @products = Product.all
  erb :index
end

# create and save new product
post '/product' do
  @product = Product.new
  @product.id = params[:id]
  @product.name = params[:name]
  @product.price = params[:price]
  @product.availability = params[:availability]
  @product.image_url = params[:image_url]

  if @product.save
    redirect '/'
  else
    erb :new
  end
end

# new product page, redirects to index/home page
get '/product' do
  erb :new
end

get '/product/:id' do
  @product = Product.find(params[:id])

  @product.save
  redirect '/'
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

# login and editing photos
put '/product/:id' do
  redirect '/session/new' if !logged_in?

  product = Product.find(params[:id])
  product.id = params[:id]
  product.name = params[:name]
  product.price = params[:price]
  product.availability = params[:availability]

  product.save
  redirect "/products/#{params[:id]}"
end

# deleting or destroying a product
delete '/product/:id' do
  @product = Product.find(params[:id])
  @product.destroy

  redirect '/'
end

post '/session' do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    #if the users email and password are both true, you are ok
    session[:user_id] = user.id
    redirect '/'
  else
    @products = Product.all
    # if wrong, redirect user back to login page
    erb :index
  end
end

# when logging out of session
delete '/session' do
  session[:user_id] = nil
  redirect '/'
end


# error checker.....works wonders
# not_found do
#   "The page you are looking for does not exist!!"
#   erb :not_found
# end



# /product/23/edit
