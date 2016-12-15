import {
  RECEIVE_CITY_DETAIL
} from '../actions/detail_actions';

import { merge } from 'lodash';



const FiltersReducer = (state = {  }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CITY_DETAIL:
      merge({}, action.cityDetails );
      return action.cityDetails;

    default:
      return state;
  }
};

export default FiltersReducer;
