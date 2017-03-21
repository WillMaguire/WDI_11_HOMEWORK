class Planet < ApplicationRecord
  validates :name, presence: true
  has_many :comments, dependent: :destroy
end
