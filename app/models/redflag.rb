class Redflag < ApplicationRecord
    belongs_to :user

    validates :description, presence: true, length: {:in => 100..500 }
    validates :headline, presence: true, length: {:in => 16..45}
    # validates :location, presence: true
    validates :status, presence: true
    validates :video, presence: true
    validates :image, presence: true

end
