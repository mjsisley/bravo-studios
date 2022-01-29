# ---
# Excerpted from "Craft GraphQL APIs in Elixir with Absinthe",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/wwgraphql for more book information.
# ---
defmodule PlateSlate.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias PlateSlate.Repo
  alias Comeonin.Ecto.Password
  alias PlateSlate.{Guardian}

  alias PlateSlate.Accounts.User

  def authenticate(email, password) do
    user = Repo.get_by(User, email: email)

    with %{password: digest} <- user,
      true <- Password.valid?(password, digest) do
        {:ok, user_with_token(user)}
      else
        _ -> :error
      end
    end

  # end
  # def authenticate(email, password) do
  #   error = {:error, [[field: :email, message: "Invalid email or password"]]}


  #   case User.find_by(email: String.downcase(email)) do
  #     nil ->
  #       error

  #     user ->
  #       case Password.valid?(password, user[:password]) do
  #         {:error, _} -> error
  #         {:ok, user} -> {:ok, user_with_token(user)}
  #       end
    # end
  # end

  defp user_with_token(user) do
    {:ok, token, _claims} = Guardian.encode_and_sign(user)
    %{user: user, token: token}
  end

  def lookup(id) do
    Repo.get_by(User, id: id)
  end

  def current_user(_parent, _args, %{context: %{current_user: current_user}}) do
    {:ok, current_user}
  end

  def current_user(_parent, _args, _resolutions) do
    {:error, "Unauthenticated"}
  end

  def signup(_parent, args, _resolution) do
    args
    |> User.create()
    |> case do
      {:ok, user} ->
        {:ok, user_with_token(user)}

      {:error, changeset} ->
        {:error, extract_error_msg(changeset)}
    end
  end

  defp extract_error_msg(changeset) do
    changeset.errors
    |> Enum.map(fn {field, {error, _details}} ->
      [
        field: field,
        message: String.capitalize(error)
      ]
    end)
  end
  #   def lookup(role, id) do
  #     Repo.get_by(User, role: to_string(role), id: id)
  #   end
end
