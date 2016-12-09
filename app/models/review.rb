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
  validates :metric_id, scope: [:user_id, :city_id]

  belongs_to :city
  belongs_to :user
  belongs_to :metric


end
