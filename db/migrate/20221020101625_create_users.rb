class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.integer :phone_number
      t.string :password_digest
      t.boolean :is_admin

      t.timestamps
    end
  end
end
