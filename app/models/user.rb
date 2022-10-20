class User < ApplicationRecord
has_secure_password

validates :password, presence: true
validates :email, presence: true, uniqueness: true
validates :name, presence: true
    has_many :redflags
    has_many :interventions
end
