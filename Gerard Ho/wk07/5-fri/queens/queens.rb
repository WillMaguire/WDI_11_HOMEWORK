# Queen Attack
#
# In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.
#
# A chessboard can be represented by an 8 by 8 array.
#
# Write a program that positions two queens on a chess board and indicates whether or not they are positioned so that they can attack each other.
#
# queens = Queens.new(:white => [2, 3], :black => [5, 6])
# queens.to_s
# # => "O O O O O O O O
#       O O O O O O O O
#       O O O W O O O O
#       O O O O O O O O
#       O O O O O O O O
#       O O O O O O B O
#       O O O O O O O O
#       O O O O O O O O"
#
# queens.attack?
# # => true
require 'pry'

class Queens

  def initialize
    @game_array = board_array
    @game_array[0][3] = "W"
    @game_array[7][3] = "B"
  end

  def board_array
    board = []
    for i in 0..7
      board = board.push(board_row)
    end
    return board
  end

  def board_row
    row = []
    for i in 0..7
      row = row.push(0)
    end
    return row
  end

  def white
    @game_array.each do |line|
      column = 0
      if line.include?("W")
        row = line.index("W")
      else
        column += 1
      end
    end
      return [row,column]

  end
  def black

  end

  def to_s

    return @game_array
  end
end
newBoard = Queens.new
binding.pry
