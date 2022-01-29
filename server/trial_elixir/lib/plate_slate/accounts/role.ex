defmodule PlateSlate.Accounts.Role do
  use Ecto.Schema
  import Ecto.Changeset
  alias PlateSlate.Accounts.Role

  schema "roles" do
    field(:description)
    field(:name, :string, null: false)

    many_to_many(:users, PlateSlate.Accounts.User, join_through: "user_roles")

    timestamps()
  end

  @doc false
  def changeset(%Role{} = role, attrs) do
    role
    |> cast(attrs, [:name, :description])
    |> validate_required([:name])
  end
end
