require 'set'
# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings
  has_many :cities, through: :taggings

  def self.find_by_search(search_string)
    cities = Set.new()

    Tag.all.select do |tag|
      tag.name.downcase.include? search_string.downcase
    end.each do |matched_tag|
      cities += matched_tag.cities
    end

    cities.to_a
  end

end
