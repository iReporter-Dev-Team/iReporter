class AddLatLongToRedFlags < ActiveRecord::Migration[7.0]
  def change
    add_column :redflags, :latitude, :float
    add_column :redflags, :longitude, :float
  end
end
