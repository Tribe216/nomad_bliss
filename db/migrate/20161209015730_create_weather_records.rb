class CreateWeatherRecords < ActiveRecord::Migration[5.0]
  def change
    create_table :weather_records do |t|
      t.integer :city_id, null: false
      t.integer :month, null: false
      t.integer :temp, null: false

      t.timestamps
    end

    add_index :weather_records, :city_id
    add_index :weather_records, :month
    add_index :weather_records, :temp
  end
end
