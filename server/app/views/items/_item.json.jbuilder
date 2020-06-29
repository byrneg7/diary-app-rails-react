json.extract! item, :id, :type, :name, :excerpt, :url, :upvotes, :created_at, :updated_at
json.url item_url(item, format: :json)
