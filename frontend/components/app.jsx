import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <img className='logo' src={window.site_logo} />
      <h1 className='vert-centered'>Nomad Bliss</h1>      
    </header>
    <GreetingContainer />

    { children }
  </div>
);

export default App;
