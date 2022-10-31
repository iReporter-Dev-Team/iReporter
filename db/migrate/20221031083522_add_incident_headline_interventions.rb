class AddIncidentHeadlineInterventions < ActiveRecord::Migration[7.0]
  def change
      add_column :interventions, :headline, :string
  end
end
