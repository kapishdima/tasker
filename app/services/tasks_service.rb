class TasksService
    def self.get_tasks
        Task.all
    end
    
    def self.get_task(params)
        Task.find(params[:id])
    end

    def self.create_task(params)
        Task.new(params)
    end
    
    def self.update_task(params)
        task = Task.find(params[:id])
        task.update(params)
        task
    end
    
    def self.delete_task(params)
        task = Task.find(params[:id])
        task.destroy
    end
end