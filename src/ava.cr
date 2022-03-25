require "habitat"

# TODO: Write documentation for `Ava`
module Ava
  VERSION = "0.1.0"

    Habitat.create do
      setting base_url : String
    end
end
