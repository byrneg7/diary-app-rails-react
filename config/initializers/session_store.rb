if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_diary_app', domain: 'diary_app_client'
else
  Rails.application.config.session_store :cookie_store, key: '_diary_app'
end