def generate_score(metric_name)
  if metric_name == 'cost_of_living'
    return rand(300...3500)
  elsif metric_name == 'overall'
    return rand(3...10)
  else
    return rand(2...10)
  end
end

def get_reviews
  reviews = []

  User.all.each do |user|
    City.all.each do |city|
      Metric.all.each do |metric|
        reviews << {
          user_id: user.id,
          city_id: city.id,
          metric_id: metric.id,
          score: generate_score(metric.name)
        }
      end
    end
  end

  reviews
end
