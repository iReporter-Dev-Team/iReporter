class Intervention < ApplicationRecord
    belongs_to :user

    has_one_attached :image

    has_one_attached :video
    # validates :description, presence: true, length:  {:in => 100..500 }
    # validates :headline, presence: true, length: {:in => 16..150}
    # # validates :location, presence: true
    # validates :status, presence: true
  
end
