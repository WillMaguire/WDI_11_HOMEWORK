# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all
Card.create name:'King', image_url: 'http://placehold.it/350x150'
Card.create name:'Queen', image_url: "http://placehold.it/350x150"
Card.create name:'Jacks', image_url: "http://placehold.it/350x150"
Card.create name:'Ace', image_url: "http://placehold.it/350x150"
