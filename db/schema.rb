# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161209143239) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string   "city_name",  null: false
    t.float    "latitude",   null: false
    t.float    "longitude",  null: false
    t.integer  "region_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_name", "region_id"], name: "index_cities_on_city_name_and_region_id", unique: true, using: :btree
    t.index ["latitude", "longitude"], name: "index_cities_on_latitude_and_longitude", unique: true, using: :btree
  end

  create_table "countries", force: :cascade do |t|
    t.string   "code",       null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["code"], name: "index_countries_on_code", unique: true, using: :btree
  end

  create_table "metrics", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_metrics_on_name", unique: true, using: :btree
  end

  create_table "regions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "country_code", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "city_id",    null: false
    t.integer  "metric_id",  null: false
    t.integer  "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "city_id", "metric_id"], name: "index_reviews_on_user_id_and_city_id_and_metric_id", unique: true, using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "city_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id", "city_id"], name: "index_taggings_on_tag_id_and_city_id", unique: true, using: :btree
    t.index ["tag_id"], name: "index_taggings_on_tag_id", unique: true, using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "weather_records", force: :cascade do |t|
    t.integer  "city_id",    null: false
    t.integer  "month",      null: false
    t.integer  "temp",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_weather_records_on_city_id", using: :btree
    t.index ["month"], name: "index_weather_records_on_month", using: :btree
    t.index ["temp"], name: "index_weather_records_on_temp", using: :btree
  end

end
