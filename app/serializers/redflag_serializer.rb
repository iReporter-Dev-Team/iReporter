class RedflagSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  attributes :id, :headline, :address, :location, :latitude, :longitude, :description, :status
  belongs_to :user
end
