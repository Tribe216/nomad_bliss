def get_weather_records

  weather_records = []

  def random_temp(latitude, month)
    summer_offset = 6 - (month - 6).abs
    (summer_offset * 5 + rand(0..6))
  end

  City.all.each do |city|
    0.upto(11) do |month|
      weather_records << {
        city_id: city.id,
        month: month,
        temp: random_temp(40, month)
      }
    end
  end

  weather_records
end
