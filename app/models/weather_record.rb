# == Schema Information
#
# Table name: weather_records
#
#  id         :integer          not null, primary key
#  city_id    :integer          not null
#  month      :integer          not null
#  temp       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WeatherRecord < ApplicationRecord
  validates :city_id, :month, :temp, presence: true
  validates :city_id, uniqueness: { scope: :month }

  belongs_to :city
end
