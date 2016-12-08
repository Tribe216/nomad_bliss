import React from 'react';
import { Provider } from 'react-redux';
import App from './app'
import SessionFormContainer from './session_form_container';
import Home from './home'
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
          <IndexRoute component={Home}/>
          <Route path="/home" component={ Home } />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
