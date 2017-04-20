Rails.application.routes.draw do
root 'planets#index'

get '/planets', to: 'planets#index'
get '/planets/new', to: 'planets#new' #gets the form
get '/planets/:id', to: 'planets#show'
post '/planets', to: 'planets#create'  #convention, cannot use new, this is creation of the record
delete '/planets', to: 'planets#destroy'
put '/planets/:id', to: 'planets#show'

end
