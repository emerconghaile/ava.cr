require "./spec_helper"

Spectator.describe Ava do
  it "should have a version" do
    expect(Ava::VERSION).to be_a(String)
  end
end
