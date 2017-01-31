def get_taggings

  taggings = []
  Tag.all.each do |tag|
    City.all.each do |city|
      if rand(0..2) == 0
        taggings << {
          tag_id: tag.id,
          city_id: city.id
        }
      end
    end
  end

  taggings
end
