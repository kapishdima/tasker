class Api:ProjectsController
    def index
        @projects = Project.all

        render json: @projects, status: :created
    end

    def create
        @project = Project.new(project_params)

        if @project.save
            render json: @project, status: :created
        else
            render json: @project.errors, status: :unprocessable_entity
        end
    end

    private
    def project_params
        params.require(:project).permit(:name)
    end
end