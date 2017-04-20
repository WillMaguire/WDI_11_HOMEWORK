# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all
Card.create name: 'Blastoise', image_url: 'http://assets.pokemon.com/assets/cms2/img/cards/web/EX6/EX6_EN_104.png'
Card.create name: 'Charizard', image_url: 'http://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_11.png'

Card.create name: 'Lugia', image_url: 'http://assets.pokemon.com/assets/cms2/img/cards/web/XY10/XY10_EN_78.png'

Card.create name: 'Venosaur', image_url: 'http://assets.pokemon.com/assets/cms2/img/cards/web/POP2/POP%20Series%202_EN_6.png'
