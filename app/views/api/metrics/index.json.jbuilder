json.array!(@metrics) do |metric|
  json.set! metric.id do
    json.name metric.name
  end
end
