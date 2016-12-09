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
name       | string    | not null, indexed
latitude        | float     | not null, indexed
longitude       | float     | not null, indexed, unique: with latitude
region_id       | integer   | not null, indexed, unique: with city_name

## regions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## weather_records
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, indexed
month       | integer   | not null, indexed
temp        | integer   | not null, indexed

## metrics

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique  

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique with city and metric
city_id         | integer   | not null, indexed
metric_id       | integer   | not null, indexed
score           | integer   |

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
name        | string    | not null, indexed, unique

## messages
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, indexed
city_id       | integer   | not null, indexed
body          | text      | not null
date_created  | date      | not null, default: time_now
