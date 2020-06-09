class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.string :sunrise
      t.string :image
      t.string :music

      t.timestamps
    end
  end
end
