class Ava::User
  include JSON::Serializable

  def self.url
    "#{Ava.settings.base_url}/api/v1/users"
  end

  property \
    email : String,
    full_name : String

  def self.all(headers)
    Array(User)
      .from_json(
        HTTP::Client.get(
          url,
          headers: headers
        ).body
      )
  end

  def self.to_email_recipients(headers) : String
    all(headers).map(&.to_recipient).join
  end

  def to_recipient : String
    "#{email};"
  end
end
