Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :metrics, only: [:index]
    resources :cities, only: [:index, :show]
    resources :tags, only: [:index]
  end
end
