export const RECEIVE_CITY_DETAIL = 'RECEIVE_CITY_DETAIL';

import * as CityApiUtil from '../util/city_api_util';

export const receiveCityDetail = (cityDetails) => {
  return {
    type: RECEIVE_CITY_DETAIL,
    cityDetails
  };
};

export function updateCityDetail(cityId) {
  return (dispatch) => {
    return CityApiUtil.fetchCityDetail(cityId).then(
      (cityDetails) => {
        dispatch(receiveCityDetail(cityDetails));
      }
    );
  };
}
