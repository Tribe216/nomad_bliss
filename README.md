# Nomad Bliss

[Nomad Bliss live site][site_address]

[site_address]: http://nomadbliss.top

Nomad Bliss is a full stack web digital application inspired by Nomad List. Its purpose is to help location-independent workers, a.k.a. "digital nomads", find the ideal place to live. It is built using a Ruby on Rails API for the backend and React with Redux for the front end.

## Features & Implementation

### Main Search Page

The main search page, which is also the landing page of Nomad Bliss consists of the `Filters` and `Results` React components which correspond to the search buttons on top and the results on the bottom of the page respectively.

The `Filters` component holds its own state which corresponds to the options chosen in the form. When the state changes due to the user changing a search option, the Filters component sends the search hash to the `Cities` controller, which then performs the filtering and updates the results slice of the Redux state. As a result, the `Results` component updates with the next filtered results set.

In the database, the city information is stored in the `cities`, `regions` and `countries` tables. City ratings are generated either by generating an average of the "review scores" for that city, by checking the `weather_records` table if weather filters are selected, or by joining to the `tags` table through `taggings` is a binary tag is selected. The reviews are stored in the `reviews` table and are joined to the `metrics` table to search for particular metrics selected by the user.

Each result is then passed along to a `ResultsBox` container, which also contains a `ResultsScoreBar` container to help render the summary scores when hovered upon.

### Detail View Page

Upon clicking on a result box, the program fills in the `city_detail` state slice with information on the selected city and the user is then presented with a modal that contains a Detail container. This container renders either a `DetailAggregate` or `ReviewAggregate` container depending on whether the user is viewing the all scores and tags of the city or editing their own reviews. The first option seen is always the DetailAggregate view.

The `DetailAggregate` view contains two main parts: the `DetailScoreBarSection` which renders the average scores for all metrics with the help of the `DetailScoreBar` presentation container, and the `DetailTagsSection` which displays the binary tags associated with the city. If the user is logged in, the `DetailAggregate` container also renders a button that switches the user to the `ReviewAggregate` container within the modal.

### Metric Review Page

After pressing the "review" button, the 'Detail' container, which represents the entirety of the modal, changes the container under the header to the 'ReviewAggregate' container which allows the user to add, edit, and delete their metric scores for the city in question. Whenever the user performs any such action on a subordinate 'ReviewScoreBar' container, the application immediately updates the database and application state to correspond to this change.

## To Be Implemented

### User Tagging

Users will be able to add and remove (their own) tags for cities on the review page.

### Administrator CRUD Features

Administrator users will be able to add, edit, and delete cities and regions.

### Message Board

Each city will have a slack-like channel for messaging.

### Map View

Users will have the option of seeing their result cities in a map view.
