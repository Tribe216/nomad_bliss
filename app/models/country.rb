class Country < ApplicationRecord
  validates :code, :name, presence: true, uniqueness: true

  has_many :regions,
    :foreign_key => :country_code,
    :primary_key => :code

  has_many :cities, through: :regions

end
