class CreateCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :countries do |t|
      t.string :code, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :countries, :code, :unique => true
  end
end
