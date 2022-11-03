class RedflagImageSerializer
  include JSONAPI::Serializer
  attributes :id, :headline, :address, :location, :latitude, :longitude, :image, :video_url, :description, :status
  # belongs_to :user
end
