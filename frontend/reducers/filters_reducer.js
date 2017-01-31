import {
  RECEIVE_SEARCH_RESULTS
} from '../actions/filters_actions';

import { merge } from 'lodash';

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default FiltersReducer;
