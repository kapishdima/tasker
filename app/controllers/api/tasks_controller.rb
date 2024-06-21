class Api::TasksController < ApplicationController
    before_action :get_task, only: [:update, :show, :destroy]

    def index

        @tasks = Task
                    .includes(:project)
                    .by_status(filter_parms[:status])
                    .by_project(filter_parms[:project_id])
                    .order_by_priority(filter_parms[:priority])

        render json: @tasks, status: :created
    end

    def show
        render json: @task, status: :ok
    end

    def create
        @task = Task.new(task_params)

        if task_params[:project_id]
            @task.attach_to_project_by_id(params[:project_id])
        end

        if @task.save
            render json: @task, status: :created
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end 

    def update
        if @task.update(task_params)
            render json: @task, status: :created
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end

    def destroy
        if @task.destroy
            render json: {message: "Task successfully deleted!"}, status: :ok
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end 

    private
    def get_task
        @task = Task.find(params[:id])
    end

    private
    def task_params
        params.require(:task).permit(:title, :content, :project_id, :status, :priority)
    end

    private
    def filter_parms
        params.permit(:status, :project_id, :priority)
    end
end