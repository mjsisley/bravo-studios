defmodule PlateSlate.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field(:email, :string)
    field(:name, :string)
    field(:password, Comeonin.Ecto.Password)
    # field(:roles, {:array, :string})

    # field :password, :string, virtual: true
    # field :password_hash, :string
    # field :token, :string, virtual: true

    many_to_many(:roles, PlateSlate.Accounts.Role, join_through: "user_roles")

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:name, :email, :password])
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
  end
end
