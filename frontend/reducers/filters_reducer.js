import {
  RECEIVE_SEARCH_RESULTS
} from '../actions/filters_actions';

import { merge } from 'lodash';

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      // const results = action.results;
      // return merge({} { searchFilters });
      console.log('h1');
      return action.results;
    default:
      console.log('h2');
      return state;
  }
};

export default FiltersReducer;
