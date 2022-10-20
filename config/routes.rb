Rails.application.routes.draw do
  resources :redflags, except:[:show] 

  resources :interventions, except: [:show]

  resources :users, only: [:index, :create, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


get '/me', to: 'users#show'

post '/signup', to: "users#create"


post '/login', to: 'sessions#create'

delete '/logout', to: 'sessions#destroy'

  # Defines the root path route ("/")
  # root "articles#index"
end
