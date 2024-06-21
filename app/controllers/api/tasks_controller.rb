class Api::TasksController < ApplicationController
    def index
        @tasks = Task.all

        render json: @tasks, status: :created
    end

    def create
        @task = Task.new(task_params)

        if @task.save
            render json: @task, status: :created
        else
            render json: @task.errors, status: :unprocessable_entity
        end
    end 

    private
    def task_params
        params.require(:task).permit(:title, :content)
    end
end