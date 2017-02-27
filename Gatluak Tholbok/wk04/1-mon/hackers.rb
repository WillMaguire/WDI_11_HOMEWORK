# user enter a list of names separated by comma
# I want to create directories of each names
# and inside each directory create a new file
# inside each directory create a new file README.md
# require 'fileutils' # standard library

# 3.times do
#   puts 'beetlejuuice'
# end
# hackers = ["kerri", "will", "sam"]
# # loop do
# #   puts 'help me i am stuck'
# # end
# index = 0
# while index <= 2
#   FileUtils.mkdir hackers[index]
#   index = index + 1
# end
# # while condition
# # end

# loop do
# # end

# chomp. get rids of newline when you create a new variable

require 'fileutils'
require 'pry'

outs 'enter names separated by comma'
hackers =  gets.chomp.split(', ') #["john smith", "mary jane", "full slack"]

index = 0

while index <= 2
  dir_name = hackers[index].split(' ')[0].downcase().strip

  FileUtils.cd(dir_name) do
    FileUtils.touch 'README.md'
  end

  index = index + 1
end
