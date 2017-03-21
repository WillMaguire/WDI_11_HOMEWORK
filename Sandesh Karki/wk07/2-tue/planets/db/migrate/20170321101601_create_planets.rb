class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :image_url
      t.string :position
      t.string :radius
      t.integer :distance_from_sun_in_million_km
      t.string :life

      t.timestamps
    end
  end
end
