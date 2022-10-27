class AddAttachmentImageToRedflags < ActiveRecord::Migration[7.0]
  def self.up
    change_table :redflags do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :redflags, :image
  end
end
