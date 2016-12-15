# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  city_id    :integer          not null
#  metric_id  :integer          not null
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :city_id, :metric_id, :score, presence: true
  validates :metric_id, uniqueness: { scope: [:user_id, :city_id] }

  belongs_to :city
  belongs_to :user
  belongs_to :metric

  def self.find_by_metric_name(metric_hash)
    metric_id = Metric.find_by({name: metric_hash[:metric_name]}).id

    rev = Review.find_by({
      user_id: metric_hash[:user_id],
      city_id: metric_hash[:city_id],
      metric_id: metric_id
    })
    rev
  end
end
