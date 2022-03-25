crystal_doc_search_index_callback({"repository_name":"ava","body":"# ava\n\nTODO: Write a description here\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     ava:\n       github: emerconghaile/ava.cr\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"ava\"\n```\n\nTODO: Write usage instructions here\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/emerconghaile/ava.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [emerconghaile](https://github.com/emerconghaile) - creator and maintainer\n","program":{"html_id":"ava/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"ava","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"ava/Ava","path":"Ava.html","kind":"module","full_name":"Ava","name":"Ava","abstract":false,"ancestors":[{"html_id":"ava/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"ava/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"locations":[{"filename":"src/ava.cr","line_number":4,"url":"https://github.com/emerconghaile/ava.cr/blob/3cad8aa2515af0ff81741a1b52e9f6a66b15d34f/src/ava.cr#L4"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"HABITAT_SETTINGS","name":"HABITAT_SETTINGS","value":"[{decl: base_url : String, example: nil, validation: nil}] of Nil"},{"id":"VERSION","name":"VERSION","value":"\"0.1.0\""}],"included_modules":[{"html_id":"ava/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"ava/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"doc":"TODO: Write documentation for `Ava`","summary":"<p><span class=\"flag orange\">TODO</span>  Write documentation for <code><a href=\"Ava.html\">Ava</a></code></p>","class_methods":[{"html_id":"configure(&)-class-method","name":"configure","abstract":false,"location":{"filename":"src/ava.cr","line_number":7,"url":"https://github.com/emerconghaile/ava.cr/blob/3cad8aa2515af0ff81741a1b52e9f6a66b15d34f/src/ava.cr#L7"},"def":{"name":"configure","yields":1,"visibility":"Public","body":"yield settings"}},{"html_id":"settings-class-method","name":"settings","abstract":false,"location":{"filename":"src/ava.cr","line_number":7,"url":"https://github.com/emerconghaile/ava.cr/blob/3cad8aa2515af0ff81741a1b52e9f6a66b15d34f/src/ava.cr#L7"},"def":{"name":"settings","visibility":"Public","body":"HabitatSettings"}}],"instance_methods":[{"html_id":"settings-instance-method","name":"settings","abstract":false,"location":{"filename":"src/ava.cr","line_number":7,"url":"https://github.com/emerconghaile/ava.cr/blob/3cad8aa2515af0ff81741a1b52e9f6a66b15d34f/src/ava.cr#L7"},"def":{"name":"settings","visibility":"Public","body":"HabitatSettings"}}],"types":[{"html_id":"ava/Ava/HabitatSettings","path":"Ava/HabitatSettings.html","kind":"class","full_name":"Ava::HabitatSettings","name":"HabitatSettings","abstract":false,"superclass":{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"ava/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/ava.cr","line_number":7,"url":"https://github.com/emerconghaile/ava.cr/blob/3cad8aa2515af0ff81741a1b52e9f6a66b15d34f/src/ava.cr#L7"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"ava/Ava","kind":"module","full_name":"Ava","name":"Ava"},"class_methods":[{"html_id":"base_url:String-class-method","name":"base_url","abstract":false,"def":{"name":"base_url","return_type":"String","visibility":"Public","body":"@@base_url.not_nil!"}},{"html_id":"base_url=(value:String)-class-method","name":"base_url=","abstract":false,"args":[{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(value : String)","args_html":"(value : String)","def":{"name":"base_url=","args":[{"name":"value","external_name":"value","restriction":"String"}],"visibility":"Public","body":"@@base_url = value"}},{"html_id":"base_url?-class-method","name":"base_url?","doc":"Used for checking missing settings on non-nilable types\nIt's advised to use base_url in your apps to ensure\nthe propper type is checked.","summary":"<p>Used for checking missing settings on non-nilable types It's advised to use base_url in your apps to ensure the propper type is checked.</p>","abstract":false,"def":{"name":"base_url?","visibility":"Public","body":"@@base_url"}},{"html_id":"to_h-class-method","name":"to_h","doc":"Generates a hash using the provided values","summary":"<p>Generates a hash using the provided values</p>","abstract":false,"def":{"name":"to_h","visibility":"Public","body":"{\"base_url\" => base_url}"}}]}]}]}})