Rails.application.routes.draw do

  # Magic 8 Ball Game
  # Magic 8 ball takes user's questions and returns an eerily prescient answer

  get '/', to: 'games#index'
  get '/magic8balls', to: 'games#magic8ball1'

  get '/magic8ball', to: 'games#answers'


  # Secret Number Game
  # Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
  # Rock Paper Scissors

  get '/', to: 'games#index'

  get '/secret_numbers', to: 'games#secret_numbers'

  get '/secret_numbers', to: 'games#secret_numbers#show'

  # Rock Paper Scissors
  # Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
  # Use params[:throw] as the user's choice
  # Compare the 2!

  get '/', to: 'games#index'

  get '/rock_paper_scissors', to: 'games#rock_paper_scissors'

  get 'rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play' 

end
