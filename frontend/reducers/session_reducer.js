import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

import { merge } from 'lodash';

const initialState = {
  currentUser: null,
  errors: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newUser = {'currentUser': action.currentUser };
      let newState = merge({}, state, newUser);

      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};
