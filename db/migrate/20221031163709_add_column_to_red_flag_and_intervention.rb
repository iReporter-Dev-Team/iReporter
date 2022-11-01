class AddColumnToRedFlagAndIntervention < ActiveRecord::Migration[7.0]
  def change
    add_column :redflags, :address, :string
    add_column :interventions, :address, :string
  end
end
