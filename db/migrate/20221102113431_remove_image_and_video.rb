class RemoveImageAndVideo < ActiveRecord::Migration[7.0]
  def change
    # remove image and video columns in redflags table
    remove_column :redflags, :image
    remove_column :redflags, :video
    # remove image and video columns in interventions table
    remove_column :interventions, :image
    remove_column :interventions, :video
  end
end
