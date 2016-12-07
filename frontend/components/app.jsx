import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <img className='logo' src={window.site_logo} />
      <h1>Nomad Bliss</h1>
      <GreetingContainer />
    </header>

    { children }
  </div>
);

export default App;
