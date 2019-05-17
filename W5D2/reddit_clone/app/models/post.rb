# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#  url        :string
#  content    :string
#  sub_id     :integer          not null
#  author_id  :integer          not null
#

class Post < ApplicationRecord
  validates :title, :sub_id, :author_id, presence: true

  has_many :sub_posts,
    primary_key: :id,
    foreign_key: :post_id,
    dependent: :destroy, 
    inverse_of: :sub,
    class_name: 'Subpost'

    
  has_many :subs,
    through: :sub_posts,
    source: :sub

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

    

end
