class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :status, :priority
  belongs_to :project
end