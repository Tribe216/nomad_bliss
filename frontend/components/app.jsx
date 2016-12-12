import React from 'react';
import GreetingContainer from './greeting_container';
import FiltersContainer from './filters_container';
import ResultsContainer from './results_container';

import Home from './home';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header className='site-navbar'>
      <Link className='site-label-box' to="/">
        <img className='logo' src={window.site_logo} />
        <span className='site-name'>
          <strong>Nomad</strong> Bliss
        </span>
      </Link>
      <GreetingContainer />

    </header>
    <main>
      <FiltersContainer />
      <ResultsContainer />
      { children }
    </main>
  </div>
);

export default App;
