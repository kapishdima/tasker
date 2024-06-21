

class CreateTasks < ActiveRecord::Migration[7.1]
  enable_extension 'pgcrypto' unless extension_enabled?('pgcrypto')

  def change
    create_table :tasks, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
