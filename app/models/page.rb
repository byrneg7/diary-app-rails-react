class Page < ApplicationRecord
  validates :content, presence: true

  belongs_to :journal
end
