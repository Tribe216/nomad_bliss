import React from 'react';
import Filters from './filters'
import Results from './results'

const Home = ({ children }) => (
  <div className='home'>
    This is the Home container
    <Filters />
    <Results />
  </div>
);

export default Home;
