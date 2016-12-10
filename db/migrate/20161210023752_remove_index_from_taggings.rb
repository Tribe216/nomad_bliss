class RemoveIndexFromTaggings < ActiveRecord::Migration[5.0]
  def change
    drop_table :taggings

    create_table :taggings do |t|
      t.integer :city_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end

    add_index :taggings, [:tag_id, :city_id], :unique => true
  end
end
