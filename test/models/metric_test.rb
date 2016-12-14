# == Schema Information
#
# Table name: metrics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  long_name  :string           not null
#

require 'test_helper'

class MetricTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
