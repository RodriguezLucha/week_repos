# == Schema Information
#
# Table name: subposts
#
#  id         :bigint(8)        not null, primary key
#  sub_id     :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subpost < ApplicationRecord
  validates :sub_id, presence: true
  validates :post_id, presence: true

  belongs_to :sub,
    primary_key: :id,
    foreign_key: :sub_id,
    class_name: 'Sub'

  belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'
end
