class Journal < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  belongs_to :user
  has_many :pages

  def belongs_to_user(current_user)
    user.id == current_user.id
  end

end
