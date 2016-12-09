class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :name

      t.timestamps
    end

    add_index :taggings, :tag_id, :unique => true
  end
end
