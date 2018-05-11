class Ingredient < ApplicationRecord
  has_many :doses

  validates :name, presence: true, uniqueness: true

  def self.form_collection
    all.map { |i| [i.name, i.id] }
  end
end
