defmodule PlateSlate.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:roles) do
      add(:role, :string, null: false)
      add(:description, :string)

      timestamps()
    end

    create table(:users) do
      add(:name, :string)
      add(:email, :string)
      add(:password, :string)
      # add(:roles, {:array, :string})

      timestamps()
    end

    create(unique_index(:users, [:email]))

    create table(:user_roles, primary_key: false) do
      add(:user_id, references(:users), null: false)
      add(:user_role_id, references(:roles), null: false)
    end
  end
end
