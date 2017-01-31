import {
  UPDATE_REVIEWS,
  DELETE_REVIEW,
  UPDATE_ONE_REVIEW,
  NEW_REVIEW
} from '../actions/review_actions';

import { merge } from 'lodash';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let copy = merge([], state);

  switch(action.type) {
    case UPDATE_REVIEWS:
      return action.results;

    case NEW_REVIEW:
      return state.concat(action.newReview);

    case UPDATE_ONE_REVIEW:
      const matchingIndex = copy.findIndex( (el) => {
        return (el.review_id === action.toUpdate.id);
      });
      copy[matchingIndex].score = action.toUpdate.score;
      return copy;

    case DELETE_REVIEW:
      return state.filter( (review) => review.review_id !== action.reviewId);

    default:
      return state;
  }
};

export default ReviewReducer;
