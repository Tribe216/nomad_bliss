import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <header className='group'>
      <img className='logo' src={window.site_logo} />
      <h1 className='vert-centered'>
        <strong>Nomad</strong> Bliss
      </h1>
      <GreetingContainer />
    </header>

    { children }
  </div>
);

export default App;
