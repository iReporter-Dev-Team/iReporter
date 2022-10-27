class Redflag < ApplicationRecord
    belongs_to :user

    validates :description, presence: true, length: {:in => 1..500 }
    validates :location, presence: true
    validates :status, presence: true
    # validates :video, presence: true
    # validates :image, presence: true
    has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
    validates_attachment :image, presence: true
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
