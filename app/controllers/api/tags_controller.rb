class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all.map {|tag| tag.name }
  end

end
