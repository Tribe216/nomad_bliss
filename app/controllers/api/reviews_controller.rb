class Api::ReviewsController < ApplicationController

  def create
    @review = current_user.reviews.new(review_params)

    unless @review.save
      render json: ["Review submission problem"], status: 401
    end

  end

  def index
    @reviews = current_user.reviews
  end

  def show
    city_id = params[:id]
    @reviews = City.find(city_id).reviews_for_user(current_user.id)
  end

  def update
    @review = find(params[:id])
    @review.score = review_params[:score]
    unless @review.user == current_user
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end

    unless @review.save
      render json: ["Review update problem"], status: 401
    end
  end

  def destroy
    review = find(review_params[:review_id])
    if review.user == current_user
      review.destroy
    else
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end
  end

  def review_params
    params.require(:review).permit(:score)
  end

end
