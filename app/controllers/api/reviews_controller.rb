class Api::ReviewsController < ApplicationController

  def create

    metric = Metric.find_by name: review_params[:metric_name]

    new_params = {
      user_id: current_user.id,
      city_id: review_params[:city_id],
      metric_id: metric.id,
      score: review_params[:score]
    }

    @review = Review.new(new_params)

    if @review.save
      render json: {
        review_id: @review.id,
        metric_name: Metric.find(@review.metric_id).name,
        score: @review.score
      }

    else @review.save
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
    @review = Review.find(params[:id])

    @review.score = review_params[:score]
    unless @review.user == current_user
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end

    unless @review.save
      render json: ["Review update problem"], status: 401
    end

    render json: @review
  end

  def destroy
    review = Review.find(params[:id])
    unless review.destroy
      render json: ["Can't edit/remove others' reviews!"], status: 401
    end

    render :show
  end

  def review_params
    params.require(:review).permit(:city_id, :metric_name, :score)
  end

end
