Rails.application.routes.draw do
  devise_for :users

  resources :users, only: %i[show index edit update] do
    resources :matches, only: %i[new create destroy] do
      resources :messages, only: %i[create]
    end
  end

  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
