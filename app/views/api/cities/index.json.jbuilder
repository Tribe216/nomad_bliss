
# json.array!(@cities) do |city|
#   json.set! city['id'] do
#     json.merge! city
#   end
# end

json.array!(@cities) do |city|
  json.merge! city
end
