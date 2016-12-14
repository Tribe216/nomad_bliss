# == Schema Information
#
# Table name: cities
#
#  id                 :integer          not null, primary key
#  city_name          :string           not null
#  latitude           :float            not null
#  longitude          :float            not null
#  region_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class City < ApplicationRecord

  validates :city_name, :latitude, :longitude, :region_id, presence: true
  validates :city_name, uniqueness: { scope: :region_id }
  validates :longitude, uniqueness: { scope: :latitude }

  has_attached_file :image, default_url: "generic_city.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  belongs_to :region
  delegate :country, :to => :region, :allow_nil => true

  has_many :messages
  has_many :taggings
  has_many :tags, through: :taggings
  has_many :weather_records
  has_many :reviews

  default_scope { order(created_at: :desc) }

  def image_url
    self.image.url
  end

  def metric_rejects(name, values)
    (values[:min] && self.send(name) < values[:min].to_f) ||
    (values[:max] && self.send(name) > values[:max].to_f)
  end

  def weather_rejects(temperature, values)
    (values[:min] && temperature < values[:min].to_f) ||
    (values[:max] && temperature > values[:max].to_f)
  end

  def month_integer(month)
    return month if month.is_a?(Integer)

    Date::ABBR_MONTHNAMES.index(month[0...3].capitalize)
  end

  def self.sort_by_metric(cities, metric_name)
    cities.sort{ |l, r| r["scores"][metric_name] <=> l["scores"][metric_name] }
  end

  def self.filter_by(filter_hash)
    match_cities = []

    City.includes(:weather_records, :tags, :reviews).each do |city|

      unless filter_hash[:searchFilters]
        match_cities << city
        next
      end

      is_match = true;
      if filter_hash[:searchFilters][:metrics]
        metrics = filter_hash[:searchFilters][:metrics]
        metrics.each do |name, values|
          if city.metric_rejects(name, values)
            is_match = false
            next
          end
        end
      end

      if filter_hash[:searchFilters][:weather]

        weather = filter_hash[:searchFilters][:weather]
        target = !!weather[:month] ? city.weather_for(weather[:month]) : city.average_temp
        if city.weather_rejects(target, weather)
          next
        end
      end

      if filter_hash[:searchFilters][:tags]
        tags = filter_hash[:searchFilters][:tags]
        tags.each do |tag|
          unless city.associated_tag_names.include? tag
            is_match = false
            break
          end
        end
      end

      match_cities << city if is_match
    end

    City.sort_by_metric(match_cities.map { |city| city.with_info }, "overall")
  end

  def weather_for(month)
    self.weather_records.find {|rec| rec.month == month.to_i}[:temp]
  end

  def average_temp
    self.weather_records.map{ |wr| wr.temp }.inject(:+) / self.weather_records.count
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

  def with_info
    self.as_json.merge({
      country_name: self.country_name,
      region_name: self.region_name,
      scores: self.average_scores,
      tags: self.tag_names,
      image_url: self.image_url
    }).as_json
  end

  def region_name
    self.region.name
  end

  def country_name
    self.country.name
  end

  def tag_names
    self.tags.map {|tag| tag.name}
  end

end
