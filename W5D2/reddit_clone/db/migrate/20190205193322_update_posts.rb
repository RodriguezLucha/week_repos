class UpdatePosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :title, :string, null: false
    add_column :posts, :url, :string
    add_column :posts, :content, :string
    add_column :posts, :sub_id, :integer, null: false     
    add_column :posts, :author_id, :integer, null: false
    add_index :posts, :author_id
    add_index :posts, :sub_id
    add_index :posts, :title
  end
end
