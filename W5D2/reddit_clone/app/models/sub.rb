# == Schema Information
#
# Table name: subs
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :string           not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Sub < ApplicationRecord
  validates :title, :description, :moderator_id, presence: true

  has_many :sub_posts,
    primary_key: :id,
    foreign_key: :sub_id,
    dependent: :destroy, 
    inverse_of: :post,
    class_name: 'Subpost'

  has_many :posts,
    through: :sub_posts,
    source: :post

  belongs_to :moderator,
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: 'User'

end
