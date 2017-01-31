export const UPDATE_REVIEWS = 'UPDATE_REVIEWS';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const UPDATE_ONE_REVIEW = 'UPDATE_ONE_REVIEW';
export const NEW_REVIEW = 'NEW_REVIEW';

import * as ApiUtil from '../util/review_api_util';

export const updateReviews = (reviews) => {
  return {
    type: UPDATE_REVIEWS,
    results: reviews
  };
};

export const updateReview = (review) => {
  return {
    type: UPDATE_ONE_REVIEW,
    toUpdate: review
  };
};

export const newReview = (review) => {
  return {
    type: NEW_REVIEW,
    newReview: review
  };
};

export const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId: reviewId
  };
};

export function getCityReviews(cityId) {
  return (dispatch) => {
    return ApiUtil.fetchCityReviews(cityId).then(
      (results) => dispatch(updateReviews(results))
    );
  };
}

export function submitNewReview(reviewData) {
  return (dispatch) => {
    return ApiUtil.newReview(reviewData).then(
      (results) => dispatch(newReview(results))
    );
  };
}

export function submitUpdatedReview(reviewId, reviewData) {

  return (dispatch) => {
    return ApiUtil.pushReview(reviewId, reviewData).then(
      (result) => dispatch(updateReview(result))
    );
  };
}

export function removeReview(reviewId) {
  return (dispatch) => {
    return ApiUtil.deleteReview(reviewId).then(
      () => dispatch(deleteReview(reviewId))
    );
  };
}
