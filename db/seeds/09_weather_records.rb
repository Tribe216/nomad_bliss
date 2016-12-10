WEATHER_RECORDS = []

def random_temp(latitude, month)
  summer_offset = 6 - (month - 6).abs
  (summer_offset * 4 + rand(0..6))
end


1.upto(City.count) do |city_id|
  1.upto(12) do |month|
    WEATHER_RECORDS << {
      city_id: city_id,
      month: month,
      temp: random_temp(40, month)
    }
  end
end
