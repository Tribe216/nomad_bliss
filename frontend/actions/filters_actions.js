export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

import * as ApiUtil from '../util/city_api_util';

export const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};


export function updateSearchResults(searchFilters) {
  return (dispatch) => {
    return ApiUtil.fetchCities(searchFilters).then(
      (results) => {
        dispatch(receiveSearchResults(results));
      }
    );
  };
}
