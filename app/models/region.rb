# == Schema Information
#
# Table name: regions
#
#  id           :integer          not null, primary key
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  country_code :string           not null
#

class Region < ApplicationRecord
  validates :name, :country_code, presence: true

  has_many :cities

  belongs_to :country,
    :foreign_key => :country_code,
    :primary_key => :code

  def self.find_by_search(search_string)
    cities = Set.new()

    Region.all.select do |region|
      region.name.downcase.include? search_string.downcase
    end.each do |matched_region|
      cities += matched_region.cities
    end

    cities.to_a
  end

end
