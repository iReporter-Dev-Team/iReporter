class Intervention < ApplicationRecord
    belongs_to :user

    validates :description, presence: true, length:  {:in => 1..50 }
    validates :location, presence: true
    validates :status, presence: true
    validates :video, presence: true
    validates :image, presence: true
end
