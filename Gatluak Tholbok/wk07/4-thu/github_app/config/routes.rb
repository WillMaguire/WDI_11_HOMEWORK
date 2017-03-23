Rails.application.routes.draw do
  get 'profiles/show'
  get 'profiles/add_profile', to: 'profiles#add_profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
