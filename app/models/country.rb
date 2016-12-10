# == Schema Information
#
# Table name: countries
#
#  id         :integer          not null, primary key
#  code       :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Country < ApplicationRecord
  validates :code, :name, presence: true, uniqueness: true

  has_many :regions,
    :foreign_key => :country_code,
    :primary_key => :code

  has_many :cities, through: :regions

end
