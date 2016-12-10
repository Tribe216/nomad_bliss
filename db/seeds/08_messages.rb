def get_messages
  messages = []

  1.upto(City.count) do |city_id|
    rand(0..8).times do
      user_id = rand(1..User.count)
      # puts user_id
      messages << {
        user_id: user_id,
        city_id: city_id,
        body: Faker::Hipster.paragraph
      }
    end
  end

  messages
end
