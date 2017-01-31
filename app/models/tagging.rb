# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  city_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :city_id, :tag_id, presence: true
  validates :city_id, uniqueness: { scope: :tag_id }

  belongs_to :city
  belongs_to :tag
end
