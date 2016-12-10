require_relative './seeds/00_users.rb'
require_relative './seeds/01_countries.rb'
require_relative './seeds/02_regions.rb'
require_relative './seeds/03_cities.rb'
require_relative './seeds/04_metrics.rb'
require_relative './seeds/05_reviews.rb'
# require_relative './seeds/08_messages.rb'
require_relative './seeds/06_tags.rb'
require_relative './seeds/07_taggings.rb'
require_relative './seeds/09_weather_records.rb'

USERS.each { |user| User.create(user) }

###############################################################

COUNTRIES.each { |country| Country.create(country) }

###############################################################

USA_STATES.each do |state|
  Region.create({name: state, country_code: "us"})
end

CANADA_PROVINCES.each do |province|
  Region.create({name: province, country_code: "ca"})
end

###############################################################
CITIES_NEAR_NYC.each do |city|
  City.create(city)
end

###############################################################

METRICS.each do |metric|
  Metric.create(metric)
end

###############################################################

WEATHER_RECORDS.each do |weather|
  WeatherRecord.create(weather)
end

###############################################################

REVIEWS.each do |review|
  Review.create(review)
end

###############################################################

TAGS.each do |tag|
  Tag.create(tag)
end

###############################################################

update_taggings
TAGGINGS.each do |tagging|
  Tagging.create(tagging)
end
