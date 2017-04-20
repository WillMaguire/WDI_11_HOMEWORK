class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :description
      t.string :home_team
      t.string :away_team
      t.integer :home_odds
      t.integer :away_odds
      t.datetime :start_time
      t.datetime :end_time
      t.string :status
      t.string :game_type

      t.timestamps
    end
  end
end
