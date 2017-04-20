# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.destroy_all
Card.create name: 'Q2', image_url: 'http://vignette3.wikia.nocookie.net/disney/images/f/f5/OffWithHerHead-SW.png/revision/latest?cb=20160221131038'

Card.create name: 'Evil Queen', image_url: 'https://ih0.redbubble.net/image.15170628.0649/flat,1000x1000,075,f.u2.jpg'
Card.create name: 'Q4', image_url: 'http://vignette3.wikia.nocookie.net/disney/images/f/f5/OffWithHerHead-SW.png/revision/latest?cb=20160221131038'
Card.create name: 'Q5', image_url: 'http://vignette3.wikia.nocookie.net/disney/images/f/f5/OffWithHerHead-SW.png/revision/latest?cb=20160221131038'
