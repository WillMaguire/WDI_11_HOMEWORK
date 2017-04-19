class GamesController < ApplicationController
  def index

  end

  def play_magic
    answer_array = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it","As I see it, yes", "Most likely", "Outlook good"]
      num = Random.new
      a = num.rand(answer_array.length)
      flash.now[:message] = answer_array[a]
      @question = params[:q1]
    end
  end

    #The flash is a special part of the session which is cleared with each request.
    #This means that values stored there will only be available in the next request, which
    #is useful for passing error messages etc. It is accessed in much the same way as the session, as a hash
    #By default, adding values to the flash will make them available to the next request, but sometimes you
    #may want to access those values in the same request. For example, if the create action fails
    #to save a resource and you render the new template directly, that's not going to result in a
    #new request, but you may still want to display a message using the flash. To do this, you can use flash.now
    #in the same way you use the normal flash

    def guess_number


      secret_number = num[:secret_number].to_i
      guess = params[:guess].to_i

      if secret_number == guess
        flash[:notice] = "You win! #{guess} is correct number. Guess another number to play again!"
        num[:secret_number] = Random.rand(10)
        num[:all_guess] = " "
      elsif secret_number > guess
        flash[:alert] = "Too Low, guess again!"
      elsif secret_number < guess
        flash[:alert] = "Too High, guess again!"
      end

    end
end
