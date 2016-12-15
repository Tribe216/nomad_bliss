export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const NEW_REVIEW = 'NEW_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

import * as ApiUtil from '../util/review_api_util';

export const updateReview = () => {
  return {
    type: UPDATE_REVIEW
  };
};

export const newReview = () => {
  return {
    type: NEW_REVIEW
  };
};

export const deleteReview = () => {
  return {
    type: DELETE_REVIEW
  };
};


// This passes the dispatch function to a async-sync function pair
// that signs up the user and then on success sends a normal action
// which either updates the store with current user or handles errors
export function signup(user) {
  return (dispatch) => {
    return ApiUtil.signup(user).then(
      (currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
