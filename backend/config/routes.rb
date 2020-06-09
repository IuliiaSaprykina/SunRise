Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :locations, only: [:index, :show, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
