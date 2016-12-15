class Api::ReviewsController < ApplicationController
  before_filter :require_signed_in!

  def create
    @review = current_user.reviews.new(review_params)

    unless @review.save
      render json: ["Review submission problem"], status: 401
    end

  end

  def show
    @review = current_user.reviews.find(review_params)
  end

  def update
    @review = Review.find(params[:id])

    unless @review.user == current_user
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end

    unless @review.save
      render json: ["Review update problem"], status: 401
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.user == current_user
      review.destroy
    else
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end
  end

  def review_params
    params.require(:review).permit(:city_id, :metric_id, :score)
  end

end
