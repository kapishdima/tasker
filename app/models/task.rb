class Task < ApplicationRecord
    enum status: { backlog: 0, todo: 1, in_progress: 2, test: 3, done: 4}
    enum priority: { low: 0, medium: 1, urgent: 2}
    
    belongs_to :project, optional: true

    scope :by_status, -> (status) { where(status: status) if status.present? }
    scope :by_project, -> (project_id) { where(project_id: project_id) if project_id.present? }

    scope :order_by_priority, -> (direction) { order(priority: direction) if direction.present? }

    def attach_to_project_by_id(project_id)
        self.project_id = project_id
        save
    end
end
