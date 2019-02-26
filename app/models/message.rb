class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

# バリデーション機能-データベースにデータを保存する前に検証できる機能
  validates :content, presence: true, unless: :image?
 # ImageUploader  imageをアップロードできる機能
  mount_uploader :image, ImageUploader
end
