# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all

Card.create name: 'King', image_url: 'http://media.gettyimages.com/vectors/king-of-clubs-two-playing-card-vector-id165587350'

Card.create name: 'Queen', image_url: 'http://media.gettyimages.com/photos/vintage-simple-background-playing-card-picture-id657424376'

Card.create name: 'Jack', image_url: 'http://media.gettyimages.com/vectors/jack-of-bullets-vector-id165677058'

Card.create name: 'Ace', image_url: 'http://media.gettyimages.com/photos/ace-of-spades-picture-id167451530'
