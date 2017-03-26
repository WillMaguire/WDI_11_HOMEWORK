class Queens

  def initialize(options={white: [0, 3], black: [7, 3]})
    @options = options
    if @options[:white][0] == @options[:black][0] && @options[:white][1] == @options[:black][1]
      raise ArgumentError
    end
    @board = []
    8.times do
      row = []
      8.times do
        row << 'O'
      end
      @board << row
    end
    @board[ @options[:white][0] ][ @options[:white][1] ] = 'W'
    @board[ @options[:black][0] ][ @options[:black][1] ] = 'B'
  end

  def find(row_index, player)
    if player_index = @board[row_index].index(player)
      @position = [row_index, player_index]
    end
  end

  def white
    @board.each_index {|x| find(x, 'W')}
    return @position
  end

  def black
    @board.each_index {|x| find(x, 'B')}
    return @position
  end

  def to_s
    board_flatter = []
    @board.each do |row|
      board_flatter << row.join(' ')
    end
    board_flat = board_flatter.join("\n")
  end

  def same_row_or_column?
    2.times do |i|
      if @options[:white][i] == @options[:black][i]
        return true
      end
    end
    return false
  end

  def diagonal_available?
    if (@options[:white][0] - @options[:white][1]) == (@options[:black][0] - @options[:black][1])
      return true
    else
      return false
    end
  end



  def attack?
    if same_row_or_column? || diagonal_available?
      return true
    else
      return false
    end
  end




end
