class CreatePlanks < ActiveRecord::Migration[5.2]
  def change
    create_table :planks do |t|
      t.string :description
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
