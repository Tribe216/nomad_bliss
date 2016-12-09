# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  city_id    :integer
#  tag_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
