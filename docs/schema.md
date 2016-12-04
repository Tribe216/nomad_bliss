# Schema Information

## users
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
profile_pic_url   | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique

## cities
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
city_name       | string    | not null, indexed
latitude        | integer   |
longitude       | integer   |
region_id       | integer   | not null, indexed, unique: with city_name
thumb_img_url   | string    |
large_img_url   | string    |

## regions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
region_name | string    | not null

## weathers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, indexed
month       | integer   | not null
temp        | integer   | not null

## scores
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
city_id         | integer   | not null, indexed
overall_score   | integer   | not null, in (1,2,3,4,5)
cost_of_living  | integer   | not null, in (1,2,3,4,5)
internet        | integer   | not null, in (1,2,3,4,5)
safety          | integer   | not null, in (1,2,3,4,5)
ease_of_working | integer   | not null, in (1,2,3,4,5)
food_scene      | integer   | not null, in (1,2,3,4,5)

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, indexed
tag_id      | integer   | not null, indexed, unique: with city_id

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_name    | string    | not null, indexed, unique

## messages
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, indexed
city_id       | integer   | not null, indexed
body          | text      | not null
date_created  | date      | not null, default: time_now
