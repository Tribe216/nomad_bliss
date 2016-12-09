# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  city_name  :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  region_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :city_name, :latitude, :longitude, :region_id, presence: true
  validates :city_name, uniqueness: { scope: :region_id }
  validates :longitude, uniqueness: { scope: :latitude }

  belongs_to :region

  has_many :taggings
  has_many :tags, through: :taggings
  has_many :weather_records
  has_many :reviews

  def weather_hash

  end

  def weather_for(month)
    self.weather_records.select {|rec| rec.month == month}[:temp]
  end

  def average_temp(month)
    # self.weather_records.inject{ |sum, el| sum + el }.to_f / reviews.size
  end

  def metric_scores
    score_agg = Hash.new {|h,k| h[k] = Array.new }
    final_scores = Array.new(0)
    self.reviews.each do |review|
      score_agg[review.metric.name] += review.score
    end

    score_agg.map do |metric_key, scores|
      final_scores[metric_key] = scores.inject{ |sum, el| sum + el }.to_f / scores.size
    end

    score_agg
  end


end
