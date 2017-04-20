class User < ApplicationRecord
  has_secure_password
  has_many :plantes
  has_many :comments
end
