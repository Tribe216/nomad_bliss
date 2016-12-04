```js
{
  currentUser: {
    id: 1,
    username: "user-prime",
    profile_pic_url: "bart.jpg"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    reviewCity: {errors: ["Score must be 1-5"]},
    newMessage: {errors: ["Message can't be blank"]},
  }

  filters: {
    region_id: 1,
    cost_of_living: 3,
    safety: 5,
    month: 12,
    temp: "cold"
    tags: {
      id: 1
      name: "Public Transportation"
    }
  },

  home_cities: {
    1: {
      city_name: "Cleveland",
      region_name: "Ohio",
      overall_score: 4,
      cost_of_living: 2,
      thumb_image_url: "cleveland_thumb.jpg"
    }

    2: {
      city_name: "New York City",
      region_name: "New York",
      overall_score: 4,
      cost_of_living: 2,
      thumb_image_url: "bigapple_thumb.jpg"
    }
  },

  city_detail: {
    city_id: 2
    city_name: "New York City",
    region_name: "New York",
    overall_score: 4,
    temp: "cold",
    large_image_url: "bigapple_large.jpg",
    cost_of_living: 5,
    internet: 4,
    safety: 4,
    ease_of_working: 4,
    food_scene: 5
    tags: {
      1: {
        id: 1
        name: "Public Transportation"
      }

      2: {
        id: 2
        name: "Tall buildings"
      }
    }

    user_review: {
      overall_score: 2,
      cost_of_living: 5,
      internet: 4,
      safety: 4,
      ease_of_working: 4,
      food_scene: 5
    }
  }

  messages: {
    1: {
      username: "Bort Bort",
      date_created: "2016-11-30-00:00:00"
      body: "Very good wifi"
    }

    2: {
      username: "Milhous",
      date_created: "2016-11-30-00:00:00"
      body: "Plenty of things to see"
    }
  }
}
```
