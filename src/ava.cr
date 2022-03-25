require "habitat"
require "http"
require "json"

require "./ava/client"
require "./ava/user"

# TODO: Write documentation for `Ava`
module Ava
  VERSION = "0.1.0"

  Habitat.create do
    setting base_url : String
    setting username : String
    setting password : String
  end
end
