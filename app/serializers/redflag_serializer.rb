class RedflagSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :headline, :address, :location, :latitude, :longitude, :image, :video, :description, :status
  belongs_to :user
end
