class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name, null: false
      t.string :image_url
      t.float :orbital_distance_in_au
      t.float :mass_relative_to_earth
      t.float :diameter_relative_to_earth
      t.float :rotational_period_in_days
      t.float :orbital_period_in_years
      t.integer :number_of_moons

      t.timestamps
    end
  end
end
