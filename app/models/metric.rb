# == Schema Information
#
# Table name: metrics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Metric < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :reviews

  def average_score_for_city(city_id)
    
  end
end
