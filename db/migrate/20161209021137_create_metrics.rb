class CreateMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :metrics do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :metrics, :name, unique: :true
  end
end
