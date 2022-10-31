class InterventionSerializer < ActiveModel::Serializer
  attributes :id, :headline, :location, :latitude, :longitude, :image, :video, :description, :status
  belongs_to :user
end
