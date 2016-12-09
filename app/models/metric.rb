# == Schema Information
#
# Table name: metrics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Metric < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :reviews

  def self.names
    Metric.all.map { |metric| metric.name}
  end

  def average_for_city(city)
    reviews = Review.where(
      city_id: city.id,
      metric_id: self.id
    )

    (reviews.map {|r| r.score}.inject(:+).to_f / reviews.size).ceil
  end
end
