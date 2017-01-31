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

require 'test_helper'

class CityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
