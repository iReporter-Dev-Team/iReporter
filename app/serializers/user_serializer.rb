class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :is_admin
  has_many :redflags
  has_many :interventions
end
