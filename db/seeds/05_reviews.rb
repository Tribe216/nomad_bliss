def generate_score(metric_id)
  if Metric.find(metric_id).name == 'cost_of_living'
    return rand(300..3500)
  else
    return rand(1...10)
  end
end

def get_reviews
  reviews = []

  1.upto(User.count) do |user_id|
    1.upto(City.count) do |city_id|
      1.upto(Metric.count) do |metric_id|
        reviews << {
          user_id: user_id,
          city_id: city_id,
          metric_id: metric_id,
          score: generate_score(metric_id)
        }
      end
    end
  end

  reviews
end
