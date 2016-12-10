# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  city_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :user_id, :city_id, :body, presence: true

  belongs_to :user
  belongs_to :city

end
