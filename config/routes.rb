# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      get '/logged_in', to: 'sessions#is_logged_in?'

      resources :users, only: %i[create]
      get 'users/me', to: 'users#show'

      resources :journals, only: %i[create show index show] do
        resources :pages, only: %i[create show index show]
      end

    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
