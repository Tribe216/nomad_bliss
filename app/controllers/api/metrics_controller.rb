class Api::MetricsController < ApplicationController
  def index
    @metrics = Metric.all
  end
end
