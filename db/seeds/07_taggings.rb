def get_taggings

  taggings = []

  1.upto(Tag.count) do |tag_id|
    1.upto(City.count) do |city_id|
      if rand(0..2) == 0
        taggings << {
          tag_id: tag_id,
          city_id: city_id
        }
      end
    end
  end

  taggings
end
