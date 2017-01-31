class ChangeRegions < ActiveRecord::Migration[5.0]
  def change
    add_column :regions, :country_code, :string, null: false
  end
end
