# == Schema Information
#
# Table name: metrics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  long_name  :string           not null
#

class Metric < ApplicationRecord
  validates :name, :long_name, presence: true, uniqueness: true

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

  def self.find_by_search(search_string)
    cities = Set.new()

    Metric.all.select do |metric|
      ( metric.long_name.downcase.include?(search_string.downcase) ||
        metric.name.downcase.include?(search_string.downcase) )
    end.each do |matched_metric|
      City.all.each do |city|
        cities << city if matched_metric.average_for_city(city) >= 6
      end
    end

    cities.to_a
  end

end
