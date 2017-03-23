class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :login
      t.text :avatar_url
      t.text :gists_url

      t.timestamps
    end
  end
end
