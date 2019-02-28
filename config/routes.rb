Rails.application.routes.draw do
<<<<<<< HEAD
  devise_for :users
  root 'groups#index'
  # root 'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]

  end
=======
  root "messages#index"
>>>>>>> master
end
