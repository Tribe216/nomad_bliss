import {
  UPDATE_REVIEWS
} from '../actions/review_actions';

import { merge } from 'lodash';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_REVIEWS:
      return action.results;
    default:
      return state;
  }
};

export default ReviewReducer;
