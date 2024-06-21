Rails.application.routes.draw do
  namespace :api do
    resources :tasks

    get "projects", to: "projects#index"
    post "projects", to: "projects#create"
  end
end
