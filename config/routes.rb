Rails.application.routes.draw do
  namespace :api do
    resource: tasks, only: %i[index create]
    resource: projects, only: %i[index create]
  end
end
