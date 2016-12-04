# NomadBliss

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/c9C31ZtR

## Minimum Viable Product

NomadBliss is a web application inspired by [Nomad List](http://nomadlist.com).
It will be built using Ruby on Rails API backend and React-Redux on the front
end and have, at minimum, the following features:

- [ ] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Hosting on Heroku

- [ ] City filter and search on home page view
- [ ] Detailed city view in modal
- [ ] Message boards for each city
- [ ] Member can "review" a city -> city scores then updated
- [ ] Map view on search page

- [ ] **BONUS** Trip view for members
- [ ] **BONUS** Seed data generated through scraper/API calls
- [ ] **BONUS** Email notifications

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Setup and Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Cities Database setup and model (1 days)

**Objective:** Cities are stored in database and seeded from real data, subjective scores can be updated through API

### Phase 3: City search view (2 days)

**Objective:** Cities can be filtered using various elements on the main page

### Phase 4: City detail modal (1 days)

**Objective:** Cities can be clicked on to open up detail view modal

### Phase 5: Message Board (2 days)

**objective:** Users can write, reply to messages for each city

### Phase 6: Subjective score edit (1 days)

**objective:** Users can add/edit subjective scores to cities.
