class Ava::Client
  def url
    "#{Ava.settings.base_url}/api/v1/dologin"
  end

  getter headers

  @headers : HTTP::Headers

  def initialize
    @headers = fresh_headers
  end

  private def fresh_headers
    HTTP::Client.post(url, body: creds) do |response|
      case response.status_code
      when 200
        response.cookies.add_request_headers HTTP::Headers.new
      else
        raise "Auth no good no bueno"
      end
    end
  end

  private def creds
    {
      username: Ava.settings.username,
      password: Ava.settings.password,
    }.to_json
  end
end
