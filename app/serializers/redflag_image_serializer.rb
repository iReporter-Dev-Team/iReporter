class RedflagImageSerializer
  include JSONAPI::Serializer
  attributes :id, :headline, :address, :location, :latitude, :longitude, :image_url, :video_url, :description, :status
  # belongs_to :user
end
