require 'test_helper'

class BandsControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get bands_edit_url
    assert_response :success
  end

  test "should get index" do
    get bands_index_url
    assert_response :success
  end

  test "should get new" do
    get bands_new_url
    assert_response :success
  end

  test "should get shown" do
    get bands_shown_url
    assert_response :success
  end

end
