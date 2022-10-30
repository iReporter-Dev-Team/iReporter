class CreateRedflags < ActiveRecord::Migration[7.0]
  def change
    create_table :redflags do |t|
      t.string :title
      t.string :location
      t.string :image
      t.string :video
      t.text :description
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end
