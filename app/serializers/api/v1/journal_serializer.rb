class Api::V1::JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :updated_at
  has_many :pages
end
