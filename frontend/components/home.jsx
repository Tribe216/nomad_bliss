import React from 'react';
import FiltersContainer from './filters/filters_container';
import ResultsContainer from './results/results_container';

const Home = ({ children }) => {

  // const divStyle = {
  //   backgroundImage: 'url(' + window.bg_image + ')'
  // };

  return (

    <div className='home'>
      <FiltersContainer />
      <ResultsContainer />
    </div>
  );
};

export default Home;
