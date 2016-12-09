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

require 'test_helper'

class WeatherRecordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
