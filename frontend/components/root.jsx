import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form_container';
import Home from './home';
import DetailContainer from './detail/detail_container';
import Filters from './filters/filters';
import Results from './results/results';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/');
      }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="detail/:cityId" component={ DetailContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
