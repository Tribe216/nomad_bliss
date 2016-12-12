require_relative './seeds/00_users.rb'
require_relative './seeds/01_countries.rb'
require_relative './seeds/02_regions.rb'
require_relative './seeds/03_cities.rb'
require_relative './seeds/04_metrics.rb'
require_relative './seeds/05_reviews.rb'
require_relative './seeds/06_tags.rb'
require_relative './seeds/07_taggings.rb'
require_relative './seeds/08_messages.rb'
require_relative './seeds/09_weather_records.rb'

get_users.each { |user| User.create(user) }

###############################################################

get_countries.each { |country| Country.create(country) }

###############################################################

get_states.each do |state|
  Region.create({name: state, country_code: "us"})
end

get_canada_provinces.each do |province|
  Region.create({name: province, country_code: "ca"})
end

###############################################################
get_cities.each do |city|
  City.create(city)
end

###############################################################

get_metrics.each do |metric|
  Metric.create(metric)
end

###############################################################

get_reviews.each do |review|
  Review.create(review)
end

###############################################################

get_tags.each do |tag|
  Tag.create(tag)
end

###############################################################

get_taggings.each do |tagging|
  Tagging.create(tagging)
end

###############################################################

get_messages.each do |message|
  Message.create(message)
end

###############################################################

get_weather_records.each do |weather|
  WeatherRecord.create(weather)
end
