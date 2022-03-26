# Ava Aware Client API in Crystal

A client API for Ava Aware written in Crystal.

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     ava:
       github: emerconghaile/ava.cr
   ```

2. Run `shards install`

## Usage

1. Require `ava`:
   ```crystal
   # src/shards.cr
   require "ava"
   ```
1. Configure Ava:
   ```crystal
   # config/ava.cr
   Ava.configure do |config|
     config.base_url = "https://example.com" # url provided to you by ava
     config.username = "ava-username"
     config.password = "ava-password
   end
   
TODO: Auth and Actual Usage

## Development

TODO: Write development instructions here

## Contributing

1. Fork it (<https://github.com/emerconghaile/ava.cr/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Emer Conghaile](https://github.com/emerconghaile) - creator and maintainer
- [Alex Piechowski](https://github.com/grepsedawk) - absolute legend
