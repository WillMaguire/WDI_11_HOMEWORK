class AddImageUrlToPlanet < ActiveRecord::Migration[5.0]
  def change
    add_column :planets, :image_url, :string
  end
end
