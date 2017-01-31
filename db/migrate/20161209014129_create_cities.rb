class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :city_name, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :region_id, null: false

      t.timestamps
    end

    add_index :cities, [:latitude, :longitude], :unique => true
    add_index :cities, [:city_name, :region_id], :unique => true
  end
end
