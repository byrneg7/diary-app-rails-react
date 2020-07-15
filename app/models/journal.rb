class Journal < ApplicationRecord
  validates :title, presence: true
  validates :description, uniqueness: true

  belongs_to :user
end
