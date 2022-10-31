class CreateRedflags < ActiveRecord::Migration[7.0]
  def change
    create_table :redflags do |t|
      t.string :location
      t.string :video
      t.text :description
      t.string :status
      t.integer :user_id
      t.string :image

      t.timestamps
    end
  end
end
