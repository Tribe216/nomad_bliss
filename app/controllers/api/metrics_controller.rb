class Api::MetricsController < ApplicationController
  def index
    @metrics = Metric.all.map {|metric| metric.name }
  end
end
