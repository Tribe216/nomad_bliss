json.user do
  json.id user.id
  json.username user.username
  json.image_url asset_path(user.image_url)
end
