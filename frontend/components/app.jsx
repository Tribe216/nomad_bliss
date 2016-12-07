import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <header className='site-navbar'>
      <span className='site-label-box'>
        <img className='logo' src={window.site_logo} />
        <span className='site-name'>
          <strong>Nomad</strong> Bliss
        </span>
      </span>
      <GreetingContainer />
    </header>

    { children }
  </div>
);

export default App;
