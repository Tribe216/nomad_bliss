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


User.destroy_all
get_users.each { |user| User.create(user) }

###############################################################

Country.destroy_all
get_countries.each { |country| Country.create(country) }

###############################################################

Region.destroy_all
get_states.each do |state|
  Region.create({name: state, country_code: "us"})
end

get_canada_provinces.each do |province|
  Region.create({name: province, country_code: "ca"})
end

###############################################################
City.destroy_all

get_cities.each do |city|
  created_city = City.create!(city)
  created_city.image = File.open("app/assets/images/cities/#{created_city.id.to_s}.jpg")
  created_city.save!
end

###############################################################
Metric.destroy_all

get_metrics.each do |metric|
  Metric.create(metric)
end

###############################################################
Review.destroy_all

get_reviews.each do |review|
  Review.create(review)
end

###############################################################
Tag.destroy_all

get_tags.each do |tag|
  Tag.create(tag)
end

###############################################################
Tagging.destroy_all

get_taggings.each do |tagging|
  Tagging.create(tagging)
end

###############################################################
Message.destroy_all

get_messages.each do |message|
  Message.create(message)
end

###############################################################
WeatherRecord.destroy_all

get_weather_records.each do |weather|
  WeatherRecord.create(weather)
end
