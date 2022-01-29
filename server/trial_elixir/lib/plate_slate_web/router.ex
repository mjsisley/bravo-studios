# ---
# Excerpted from "Craft GraphQL APIs in Elixir with Absinthe",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/wwgraphql for more book information.
# ---
defmodule PlateSlateWeb.Router do
  use PlateSlateWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
    plug(PlateSlateWeb.Context)
  end

  # pipeline :graphql do
  # #   # plug(Guardian.Plug.Pipeline,
  # #   #   otp_app: :plate_slate,
  # #   #   error_handler: PlateSlate.AuthErrorHandler,
  # #   #   module: PlateSlate.Guardian
  # #   # )

  # #   # plug(Guardian.Plug.VerifyHeader, realm: "Bearer")
  # #   # plug(Guardian.Plug.LoadResource, allow_blank: true)
  #   plug(PlateSlateWeb.Context)
  # end

  scope "/api" do
    pipe_through(:api)
    # pipe_through(:graphql)
    forward "/", Absinthe.Plug, schema: PlateSlateWeb.Schema
  end

  forward("/graphiql", Absinthe.Plug.GraphiQL,
    schema: PlateSlateWeb.Schema,
    interface: :playground
  )
end
