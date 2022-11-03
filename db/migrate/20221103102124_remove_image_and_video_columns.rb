class RemoveImageAndVideoColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :redflags, :image
    remove_column :redflags, :video
    remove_column :interventions, :image
    remove_column :interventions, :video
  end
end
