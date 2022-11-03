class Redflag < ApplicationRecord
    belongs_to :user
    has_one_attached :image
    has_one_attached :video
    validates :description, presence: true, length:  {:in => 100..500 }
    validates :headline, presence: true, length: {:in => 16..150}
    # validates :location, presence: true
    validates :status, presence: true
    validates :video, presence: true
    validates :image, presence: true

    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached?
    end  
      
    def video_url
      Rails.application.routes.url_helpers.url_for(video) if video.attached?
    end
end
