class InterventionSerializer < ActiveModel::Serializer
  attributes :id, :location, :image, :video, :description, :status
  belongs_to :user
end
