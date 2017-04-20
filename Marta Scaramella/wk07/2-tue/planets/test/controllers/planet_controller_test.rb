require 'test_helper'

class PlanetControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get planet_new_url
    assert_response :success
  end

  test "should get create" do
    get planet_create_url
    assert_response :success
  end

  test "should get destroy" do
    get planet_destroy_url
    assert_response :success
  end

end
