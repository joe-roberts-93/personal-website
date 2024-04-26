Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :contact_form, only: %i[new create]
  get '/redesign', to: 'pages#redesign'
  # Defines the root path route ("/")
  # root "articles#index"
end
