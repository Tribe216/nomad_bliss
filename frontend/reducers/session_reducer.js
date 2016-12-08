import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
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
    default:
      return state;
  }
};

export default SessionReducer;
