class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.text :content
      t.references :journal, null: false, foreign_key: true
    end
  end
end
