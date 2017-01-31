export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const TURN_ON_REVIEW_MODE = 'TURN_ON_REVIEW_MODE';
export const TURN_OFF_REVIEW_MODE = 'TURN_OFF_REVIEW_MODE';

import * as ApiUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const turnOnReviewMode = () => {
  return {
    type: TURN_ON_REVIEW_MODE
  };
};

export const turnOffReviewMode = () => {
  return {
    type: TURN_OFF_REVIEW_MODE
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

export function login(user) {
  return (dispatch) => {
    return ApiUtil.login(user).then(
      (currentUser) => {
        dispatch(receiveCurrentUser(currentUser));
      },
      (err) => {
        dispatch(receiveErrors(err));
      }
    );
  };
}

export function logout() {
  return (dispatch) => {
    return ApiUtil.logout().then(
      () => dispatch(receiveCurrentUser(null)),
      (err) => dispatch(receiveErrors(err))
    );
  };
}
