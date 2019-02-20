Rails.application.routes.draw do
  root "messages#index"
  get 'messages' => 'messages#index'
  resources :messages do
  end
end
