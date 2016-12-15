import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

import { login, logout, signup, turnOffReviewMode, turnOnReviewMode } from './actions/session_actions';
import { updateSearchResults } from './actions/filters_actions';
import { updateCityDetail } from './actions/detail_actions';
import { fetchCities } from './util/city_api_util';
import { getCityReviews } from './actions/review_actions';

window.login = login;
window.logout = logout;
window.signup = signup;
window.updateSearchResults = updateSearchResults;
window.fetchCities = fetchCities;
window.updateCityDetail = updateCityDetail;

window.turnOnReviewMode = turnOnReviewMode;
window.turnOffReviewMode = turnOffReviewMode;
window.getCityReviews = getCityReviews;
// window.store = configureStore();

document.addEventListener('DOMContentLoaded', () => {

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    window.store = configureStore(preloadedState);
  } else {
    window.store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
