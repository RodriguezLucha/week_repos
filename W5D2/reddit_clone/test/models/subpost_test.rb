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

require 'test_helper'

class SubpostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
