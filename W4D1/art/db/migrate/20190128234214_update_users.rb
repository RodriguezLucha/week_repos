class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    remove_columns :users, :name, :email
    add_column :users, :username, :string ,null: false, unique: true
  end
end
