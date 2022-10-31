class AddIncidentHeadlineToRedFlags < ActiveRecord::Migration[7.0]
  def change
    add_column :redflags, :headline, :string
  end
end
