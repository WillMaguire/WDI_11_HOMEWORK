Rails.application.routes.draw do

  # Magic 8 Ball Game
  # Magic 8 ball takes user's questions and returns an eerily prescient answer

  get '/', to: 'games#index' # the is the main homepage that contains all the games
  get '/magic8ball', to: 'games#magic8ball' # this will take the user to the magic 8 ball game where they will have an input box to ask a question
  get '/magic8ball', to: 'games#answers' # this should display the answer to the question that the user asked in the game


  # Secret Number Game
  # Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
  # Rock Paper Scissors

  get '/', to: 'games#index' # homepage that contains links to all the games
  get '/secret_numbers', to: 'games#secret_numbers' # this page will prompt user to guess a secret number which will be randomly generated. if they guess correct, they will get a congratulatory response
  get '/secret_numbers', to: 'games#secret_numbers#show' # this page will show the user if their guess was correct. I think it should just be an alert. ?? an alert seems better, it would be a waste of code to create another page just to show an result

  # Rock Paper Scissors
  # Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
  # Use params[:throw] as the user's choice
  # Compare the 2!

  get '/', to: 'games#index' # this is where our rock_paper_scissors games will be hosted. with the rest of the games
  get '/rock_paper_scissors', to: 'games#rock_paper_scissors' # this will load our rock_paper_scissors game and directed to its own page where the user can play the game
  get 'rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play' # the rock_paper_scissors game will go from to the directed page ones the user click searches for that pages, or clicked on from the index/homepage

end
