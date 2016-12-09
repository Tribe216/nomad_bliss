# NomadBliss

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://nomad-bliss.herokuapp.com
[trello]: https://trello.com/b/c9C31ZtR

## Minimum Viable Product

NomadBliss is a web application inspired by [Nomad List](http://nomadlist.com).
It will be built using Ruby on Rails API backend and React-Redux on the front
end and have the following features:

0. New account creation, login, and guest/demo login
0. A production README
0. Hosting on Heroku

0. City filter and search on home page view
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Detailed city score view modal
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Member city score submission
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature
0. Message boards for each city
  * Adequate styling
  * Smooth, bug-free navigation
  * Adequate and appropriate seeds to demonstrate the feature

0. **BONUS** Map view on search page
0. **BONUS** Outside API calls for populating city info
0. **BONUS** Member trip planner

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Setup and Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Cities Database setup and model (1 days)

**Objective:** Cities are stored in database and seeded from real data, subjective scores can be updated through API

### Phase 3: City search view (2 days)

**Objective:** Cities can be filtered using various elements on the main page

### Phase 4: City detail modal (1 days)

**Objective:** Cities can be clicked on to open up detail view modal

### Phase 5: User reviews (2 days)

**objective:** Users can create, edit, and delete reviews of cities

### Phase 6: Message Board (1 day)

**objective:** Users can write, reply to messages for each city
