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

  # belongs_to :country, through: :region
  delegate :country, :to => :region, :allow_nil => true

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

  def method_missing(metric_name)
    metric = Metric.find_by(name: metric_name)
    return nil unless metric

    metric.average_for_city(self)
  end

  def average_scores
    scores = Hash.new
    Metric.all.each do |metric|
      scores[metric.id] = Hash.new()
      scores[metric.id][metric.name] = metric.average_for_city(self)
    end

    scores
  end


end
