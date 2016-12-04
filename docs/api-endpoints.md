# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Homepage Filters
- `GET /api/home/filters`
 + Generates scores and filters

### Homepage Results
- `GET /api/home/results`
 + Updates the Results shown on home page
 + Accepts query params to refine search

### Cities Detail

- `GET /api/cities/:id`
 + City Details

### Reviews
- `GET /api/scores/:id`
 + Fetch review(if any) otherwise fills with existing data
- `POST /api/scores/:id`
- `PATCH /api/scores/:id`
 + Review submission/editing

### Chat
- `GET /api/messages/:city_id`
+ Fetches messages in date order
- `POST /api/messages/:city_id`
+ New message
- `DELETE /api/messages/:city_id`
+ Remove message
