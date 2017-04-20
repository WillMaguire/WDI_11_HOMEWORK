class CreateBets < ActiveRecord::Migration[5.0]
  def change
    create_table :bets do |t|
      t.string :picked_team
      t.integer :amount
      t.integer :pay_rate
      t.string :type
      t.integer :game_id

      t.timestamps
    end
  end
end
