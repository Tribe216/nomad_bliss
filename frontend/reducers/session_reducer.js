import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  TURN_ON_REVIEW_MODE,
  TURN_OFF_REVIEW_MODE
} from '../actions/session_actions';

import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _nullUser, { errors: action.errors.responseJSON });
    case CLEAR_ERRORS:
      return merge({}, _nullUser, { errors: [] });
    case TURN_ON_REVIEW_MODE:
      return merge({}, state, { reviewMode: true });
    case TURN_OFF_REVIEW_MODE:
      return merge({}, state, { reviewMode: false });
    default:
      return state;
  }
};

export default SessionReducer;
