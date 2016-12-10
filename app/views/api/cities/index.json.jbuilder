json.array!(@cities) do |city|
  json.set! city.id do
    json.name city.city_name
    json.region city.region.name
    json.country city.country.name
  end
end
