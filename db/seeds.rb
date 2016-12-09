require_relative './seeds/00_users.rb'
require_relative './seeds/01_countries.rb'
require_relative './seeds/02_regions.rb'
require_relative './seeds/03_cities.rb'
require_relative './seeds/04_metrics.rb'
require_relative './seeds/05_reviews.rb'
# require_relative './seeds/06_tags.rb'
# require_relative './seeds/07_taggings.rb'
# require_relative './seeds/08_messages.rb'
# require_relative './seeds/09_weather_records.rb'

User.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')

USERS.each { |user| User.create(user) }

###############################################################

Country.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('countries')

COUNTRIES.each { |country| Country.create(country) }

###############################################################

Region.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('regions')

USA_STATES.each do |state|
  Region.create({name: state, country_code: "us"})
end

CANADA_PROVINCES.each do |province|
  Region.create({name: province, country_code: "ca"})
end

###############################################################

City.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('cities')

CITIES_NEAR_NYC.each do |city|
  City.create(city)
end

###############################################################

Metric.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('metrics')

METRICS.each do |metric|
  Metric.create(metric)
end

###############################################################

Review.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('reviews')

REVIEWS.each do |review|
  Review.create(review)
end
