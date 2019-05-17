# == Schema Information
#
# Table name: todos
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Todo < ApplicationRecord
    validates :body, :title, presence: true
    validates :done, inclusion: {in:[true, false]}
end
