require "./spec_helper"

Spectator.describe Ava do
  it "should have a version" do
    expect(Ava::VERSION).to be_a(String)
  end

  it "is configurable" do
    expect {
      Ava.configure do |config|
        config.base_url = "https://example.com"
        config.username = "thiccums"
        config.password = "very secure password"
      end
    }.to_not raise_error

    expect(Ava.settings.base_url).to eq "https://example.com"
    expect(Ava.settings.username).to eq "thiccums"
    expect(Ava.settings.password).to eq "very secure password"
  end
end
