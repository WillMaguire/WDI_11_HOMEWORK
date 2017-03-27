class Queens
  attr_reader :white, :black

  def initialize(pos={})
    @white,@black = pos[:white] || [0,3], pos[:black]||[7,3]
    raise ArgumentError, 'Queen cannot occupy the same space' if @white == @black
  end

  def to_s
    board = Array.new(8).map { Array.new(8, "O") }
    board[@white.first][@white.last] = 'W'
    board[@black.first][@black.last] = 'B'
    board.map {|sticher| sticher.join(' ')}.join("\n")
  end

  def attack?
    x_axis? || y_axis? || slope?
  end

  private

  def x_axis?
    white[0] == black[0]
  end

  def y_axis?
    black[1] == white[1]
  end

  def slope?
    (white[0]-black[0]).abs == (white[1]-black[1]).abs
  end

end
