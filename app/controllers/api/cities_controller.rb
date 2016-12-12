class Api::CitiesController < ApplicationController

  def index
    @cities = City.filter_by(search_params)
  end

  def show
    @city = City.find(params[:id]).with_info
  end

  def search_params
    params
  end
end
