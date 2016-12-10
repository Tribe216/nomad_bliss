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


  delegate :country, :to => :region, :allow_nil => true

  has_many :messages
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :weather_records
  has_many :reviews

  def metric_rejects(name, values)
      (values[:min] && self.send(name) < values[:min]) ||
      (values[:max] && self.send(name) > values[:max])
  end

  def month_integer(month)
    unless month.is_a?(Integer)
      Date::ABBR_MONTHNAMES.index(month) ||
      Date::MONTHNAMES.index(month)
    end
  end

  def self.filter_by(filter_hash)
    match_cities = []
    return self.rank(City.all) unless filter_hash
    City.all.each do |city|
      is_match = true;
      filter_hash[:searchFilters][:metrics].each do |name, values|
        if city.metric_rejects(name, values)
          is_match = false
          break
        end
      end

      if filter_hash[:searchFilters][:weather]
        wi = filter_hash[:searchFilters][:weather]
        if wi[:month]
          unless city.weather_for(wi[:month]).between?(wi[:min], wi[:max])
            is_match = false
            break
          end
        else
          unless city.weather_for(wi[:month]).between?(wi[:min], wi[:max])
            is_match = false
            break
          end
        end

      end

      if filter_hash[:searchFilters][:tags]
        tags = filter_hash[:searchFilters][:tags]
        tags.each do |tag|
          unless associated_tag_names.include? tag
            is_match = false
            break
          end
        end
      end

      match_cities << city if is_match
    end

    match_cities
  end

  def weather_for(month)
    self.weather_records.find {|rec| rec.month == month}[temp]
  end

  def average_temp
    self.weather_records.inject{ |sum, el| sum + el }.to_f / self.weather_records.count
  end

  def associated_tag_names
    self.tags.pluck(:name)
  end

  def method_missing(metric_name)
    metric = Metric.find_by(name: metric_name)
    return nil unless metric

    metric.average_for_city(self)
  end

  def average_scores_indexed
    scores = Hash.new
    Metric.all.each do |metric|
      scores[metric.id] = Hash.new()
      scores[metric.id][metric.name] = metric.average_for_city(self)
    end

    scores
  end

  def average_scores
    scores = Hash.new()
    Metric.all.each do |metric|
      scores[metric.name] = metric.average_for_city(self)
    end

    scores
  end

  def with_stats
    self.as_json.merge({scores: self.average_scores})
  end



end
