import React from 'react';
import { metricLongNames } from '../../util/helpers';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  costToScore(costOfLiving) {
    return Math.ceil((3500 - costOfLiving) / 320);
  }

  render() {

    return (
      <section className='review-chart'>
        {JSON.stringify(this.props)}
      </section>
    );
  }
}

export default Review;
