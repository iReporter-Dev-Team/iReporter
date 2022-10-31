class AddLatLongToInterventions < ActiveRecord::Migration[7.0]
  def change
      add_column :interventions, :latitude, :float
      add_column :interventions, :longitude, :float
  end
end
