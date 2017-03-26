require 'pry'
class Phone

  def initialize(str)
    @str = str
  end

  def number
    preOutput = @str.gsub(/\D/, '')

    if preOutput.split('')[0].to_i == 1
      output = removeDuplicate(preOutput)
    else
      str = "0000000000"
      return str
    end

    if output.length == 10
      str = output
      return str
    else
      str = "0000000000"
      return str
    end

  end

  def area_code
    preOutput = @str.gsub(/\D/, '')
    str = preOutput.split('')[0..2].join("")
    return str
  end

  def to_s
    preOutput = @str.gsub(/\D/, '')
    @bracketInt = preOutput.split('')[0..2].join("")
    @secondPortion = preOutput.split('')[3..5].join("")
    @thirdPortion = preOutput.split('')[6..9].join("")

    str = "(" + @bracketInt + ") " + @secondPortion + "-" + @thirdPortion
    return str
  end

end

def removeDuplicate(str)
  str.chomp.split('').uniq.join("")
end
