class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :city_id, null: false
      t.integer :metric_id, null: false
      t.integer :score

      t.timestamps
    end

    add_index :reviews, [:user_id, :city_id, :metric_id], :unique => true
  end
end
