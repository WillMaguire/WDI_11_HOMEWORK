class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :img_url
      t.string :comment

      t.timestamps
    end
  end
end
