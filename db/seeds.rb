# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

User.create({username: "bart", password: "password"})
User.create({username: "test1", password: "password"})
User.create({username: "test2", password: "password"})
User.create({username: "guest", password: "guestymcguestface"})

states = [
"Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"
]

tri_states = [
  "New Jersey",
  "New York",
  "Pennsylvania"
]

tri_states_cities = [
 {
   city_name: "New York",
   latitude: 40.730610,
   longitude: -73.935242,
   region_id: 60,
 },

 {
   city_name: "Philadelphia",
   latitude: 39.952583,
   longitude: -75.165222,
   region_id: 62,
 },

 {
   city_name: "Newark",
   latitude: 40.735657,
   longitude: -74.172363,
   region_id: 60,
 },

 {
   city_name: "Yonkers",
   latitude:  40.94139,
   longitude: -73.86444,
   region_id: 61,
 },

 {
   city_name: "Trenton",
   latitude: 40.217053,
   longitude: -74.742938,
   region_id: 60,
 },

 {
   city_name: "Scranton",
   latitude: 41.408970,
   longitude: -75.662415,
   region_id: 62,
 },

 {
   city_name: "Buffalo",
   latitude: 42.886448,
   longitude: -78.878372,
   region_id: 61,
 },


]


# Region.delete_all
# tri_states.each do |state|
#   Region.create({name: state})
# end

City.delete_all
tri_states_cities.each do |city|
  City.create(city)
end
