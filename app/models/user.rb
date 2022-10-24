class User < ApplicationRecord
    has_secure_password
    has_many :redflags
    has_many :interventions
    validates :password, presence: true
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    validates :phone_number, presence: true
end
