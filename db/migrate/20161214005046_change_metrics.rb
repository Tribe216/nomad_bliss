class ChangeMetrics < ActiveRecord::Migration[5.0]
  def change
    add_column :metrics, :long_name, :string, null: false
  end
end
