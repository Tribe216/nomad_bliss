## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - FiltersContainer
  + Filters
  + FiltersItem
 - ResultsContainer
  + ResultsItem

**DetailContainer**
 - DetailHeader
 - DetailScores
  + DetailScoresItem

**ReviewsContainer**
 - ReviewsScore

**ChatContainer**
 - ChatMessage
 - ChatMessagesItem
 - ChatMessageNew

|Path                                     | Component   |
|-----------------------------------------|-------------|
| "/sign-up"                              | "AuthFormContainer" |
| "/sign-in"                              | "AuthFormContainer" |
| "/home"                                 | "HomeContainer" |
| "/home/filters"                         | "Filters" |
| "/home/filters/:filterId"               | "FiltersItem" |
| "/home/results"                         | "ResultsContainer" |
| "/home/results/:resultId"               | "ResultsItem"
| "/home/detail/:cityId"                  | "DetailContainer" |
| "/home/detail/:cityId/header"           | "DetailHeader" |
| "/home/detail/:cityId/scores"           | "DetailScores" |
| "/home/detail/:cityId/scores/:scoreId"  | "DetailScoresItem" |
| "/review/:cityId"                       | "ReviewsContainer" |
| "/review/:cityId/scores/:scoreId"       | "ReviewsScore" |
| "/chat/:cityId"                         | "ChatContainer" |
| "/chat/:cityId/messages"                | "ChatMessage" |
| "/chat/:cityId/messages/:messageId"     | "ChatMessagesItem" |
| "/chat/:cityId/messages/new"            | "ChatMessageNew" |
