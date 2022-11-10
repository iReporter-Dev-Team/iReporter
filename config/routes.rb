Rails.application.routes.draw do
  resources :redflags

  resources :interventions

  resources :users, only: [:index, :create, :show, :update, :destroy]

  get '/me', to: 'users#show'

  post '/signup', to: "users#create"

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  # handle thorny client-side routing issues
  get '*path', to: "fallback#index", constraints: ->(request) do 
    !request.xhr? && request.format.html?
  end
end
