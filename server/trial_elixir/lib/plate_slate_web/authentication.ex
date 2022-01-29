# TODO: Decide if JWT is a better fit (and migrate to that for signing/verifying) or if Phoenix.Token is fine
defmodule PlateSlateWeb.Authentication do
  @user_salt "user salt"

  alias PlateSlate.{Guardian}

  def sign(data) do
    # Phoenix.Token.sign(PlateSlateWeb.Endpoint, @user_salt, data)
    Guardian.encode_and_sign(data)
  end

  def verify(token) do
    # Phoenix.Token.verify(PlateSlateWeb.Endpoint, @user_salt, token, max_age: 365 * 24 * 3600)
    Guardian.decode_and_verify(token)
  end
end


