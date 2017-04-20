# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Planet.create(
  name: "Mercury",
  image_url: "http://science.jrank.org/kids/article_images/space_p20.jpg",
  orbital_distance_in_au: 0.4,
  mass_relative_to_earth: 0.06,
  diameter_relative_to_earth: 0.38,
  rotational_period_in_days: 59,
  orbital_period_in_years: 0.24,
  number_of_moons: 0
)

Planet.create(
  name: "Venus",
  image_url: "http://science.jrank.org/kids/article_images/space_p22a.jpg",
  orbital_distance_in_au: 0.7,
  mass_relative_to_earth: 0.81,
  diameter_relative_to_earth: 0.95,
  rotational_period_in_days: 243,
  orbital_period_in_years: 0.62,
  number_of_moons: 0
)

Planet.create(
  name: "Earth",
  image_url: "http://science.jrank.org/kids/article_images/space_p24.jpg",
  orbital_distance_in_au: 1.0,
  mass_relative_to_earth: 1.00,
  diameter_relative_to_earth: 1.00,
  rotational_period_in_days: 1.00,
  orbital_period_in_years: 1.0,
  number_of_moons: 1
)

Planet.create(
  name: "Mars",
  image_url: "http://science.jrank.org/kids/article_images/space_p26.jpg",
  orbital_distance_in_au: 1.5,
  mass_relative_to_earth: 0.11,
  diameter_relative_to_earth: 0.53,
  rotational_period_in_days: 1.03,
  orbital_period_in_years: 1.9,
  number_of_moons: 2
)

Planet.create(
  name: "Jupiter",
  image_url: "http://science.jrank.org/kids/article_images/space_p28.jpg",
  orbital_distance_in_au: 5.2,
  mass_relative_to_earth: 317.8,
  diameter_relative_to_earth: 11.2,
  rotational_period_in_days: 0.42,
  orbital_period_in_years: 11.9,
  number_of_moons: 63
)

Planet.create(
  name: "Saturn",
  image_url: "http://science.jrank.org/kids/article_images/space_p30.jpg",
  orbital_distance_in_au: 9.5,
  mass_relative_to_earth: 95.2,
  diameter_relative_to_earth: 9.4,
  rotational_period_in_days: 0.44,
  orbital_period_in_years: 29.4,
  number_of_moons: 60
)

Planet.create(
  name: "Uranus",
  image_url: "http://science.jrank.org/kids/article_images/space_p32.jpg",
  orbital_distance_in_au: 19.2,
  mass_relative_to_earth: 14.5,
  diameter_relative_to_earth: 4.0,
  rotational_period_in_days: 0.72,
  orbital_period_in_years: 83.7,
  number_of_moons: 27
)

Planet.create(
  name: "Neptune",
  image_url: "http://science.jrank.org/kids/article_images/space_p34.jpg",
  orbital_distance_in_au: 30.1,
  mass_relative_to_earth: 17.2,
  diameter_relative_to_earth: 3.9,
  rotational_period_in_days: 0.67,
  orbital_period_in_years: 163.7,
  number_of_moons: 13
)

user = User.new(email: "test")
user.password = "test"
user.save
