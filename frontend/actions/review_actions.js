export const UPDATE_REVIEWS = 'UPDATE_REVIEW';

import * as ApiUtil from '../util/review_api_util';

export const updateReviews = (reviews) => {
  return {
    type: UPDATE_REVIEWS,
    results: reviews
  };
};

export function getCityReviews(cityId) {
  return (dispatch) => {
    return ApiUtil.fetchCityReviews(cityId).then(
      (results) => dispatch(updateReviews(results))
    );
  };
}

export function submitNewReview(cityId) {
  return (dispatch) => {
    return ApiUtil.newReview(cityId).then(
      (results) => dispatch(updateReviews(results))
    );
  };
}

export function submitUpdatedReview(cityId) {
  return (dispatch) => {
    return ApiUtil.updateReview(cityId).then(
      (results) => dispatch(updateReviews(results))
    );
  };
}
