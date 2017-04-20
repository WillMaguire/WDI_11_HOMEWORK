require 'test_helper'

class MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get message_new_url
    assert_response :success
  end

  test "should get create" do
    get message_create_url
    assert_response :success
  end

  test "should get destroy" do
    get message_destroy_url
    assert_response :success
  end

end
