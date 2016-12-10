class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :city_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :city_id
  end
end
